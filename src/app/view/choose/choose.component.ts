import { Component, OnInit, Input } from '@angular/core';
import {NewsService} from '../../service/news.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.less']
})
export class ChooseComponent implements OnInit {
  myList:any = [];
  industoryList:any = [];
  areaList:any = {};
  areaKeys:any = [];
  tools:any = {};
  result:any = {};
  resultKey:any = [];
  myresult:any = [];
  caiwu:any = [];
  myLirun:any = [];
  meigushuju:any = [];
  zichanfuzhaibiao:any = [];
  xianjinliuliangbiao:any = [];
   lirun:string = '';
   meigu = '';
   zichan = '';
   xianjin = '';

   todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];




  constructor(public newService: NewsService) { }

  async ngOnInit() {
  this.myList = await this.newService.getInstory()
 // console.log(this.myList)
  var p = await Promise.resolve( this.myList);
 // console.log(p);
  this.industoryList = p.data;
  this.areaList = await this.newService.getAreas();
 // console.log( this.areaList)
  this.areaKeys = await Object.keys(this.areaList.data);

this.tools = await this.newService.getToolsItem();
console.log('this is tools   ' + this.tools);
console.log('this is tools object' + Object.keys(this.tools));
console.log(this.tools.data);

//console.log(typeof(this.tools.data));
//this.result = eval(this.tools.data);
this.result = JSON.parse(this.tools.data);
console.log(this.result);
this.resultKey = await Object.keys(this.result);
this.toogleTab('基本指标')


//console.log('New result ' + this.result);



 // console.log(this.areaList.data);
/*   for(var i in this.areaKeys){
    let index = this.areaKeys[i];
    console.log(index);
    console.log("Area ? " + this.areaList.data[index]);
 
  } */
  

 // console.log('this is area keys' +  this.areaKeys);
 // this.area = 
/*   await this.areaList.forEach( function(val, index) {
  //  console.log(val, index);
  this.areaDisplay[index] = index;

    });
console.log(this.areaDisplay);

  
  } */
}
 toogleTab(key){
 // console.log(key)
  if(key == '财务报表'){
    this.caiwu = [];
    this.myLirun = [];
    this.meigushuju = [];
    this.zichanfuzhaibiao = [];
    this.xianjinliuliangbiao = [];
    this.caiwu = this.result[key];
  
    this.myresult = [];
    console.log('this is myresult ' + this.myresult);
    console.log('this is caiwu ' + Object.keys(this.caiwu) );
    console.log('this is caiwu[0] ' + Object.keys(this.caiwu[0])  );
   // this.lirun = Object.keys(this.caiwu[0]);
    console.log('this is type ' + typeof(Object.keys(this.caiwu[0])));
   // this.lirun = this.caiwu[0].index;
   this.myLirun =  Object.values(this.caiwu[0]);
   this.meigushuju = Object.values(this.caiwu[1]);
   this.zichanfuzhaibiao = Object.values(this.caiwu[2]);
   this.xianjinliuliangbiao = Object.values(this.caiwu[3]);
  
    //console.log('this.caiwu[0] ' + this.caiwu[0] )
    console.log('this.caiwu[0].index  ' + this.caiwu[0].index)
    console.log(this.myLirun[0])
  

    return;
  }else{
    this.myresult = [];
    this.myLirun = [];
    this.meigushuju = [];
    this.zichanfuzhaibiao = [];
    this.xianjinliuliangbiao = [];
    this.caiwu = [];
    this.myresult = this.result[key];

  
  }

  console.log('this is myresult ' + this.myresult);
  console.log('this is caiwu ' + this.caiwu);



}
checkCaiwu(myresult){
  return myresult.length > 0;
}
checkCaiWubaobiao(){
  return  this.caiwu.length > 0 ;
}
 async rangeListener(field){
   console.log('this is com filed' + field);
  let result = await this.newService.getRange(field);
//  console.log('this is range result ' + Object.keys(result.data.data.values));

}
drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}


}
