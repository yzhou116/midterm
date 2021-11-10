import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
//import { DragDropModule } from '@angular/cdk/drag-drop'
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  quoteList:any = [];
  quoteList1:any = [];
 // $scope.model = {};

content:any = [
   {name:'张春玲', age :28},
   {name:'王晰', age:26},
   { name:'吴正青', age :66}
];
 
/** 拖拽成功触发方法
*   index 拖拽后落下时的元素的序号（下标）
*   obj被拖动数据对象
*/

 


  constructor(public router:Router, public routerActive:ActivatedRoute) { 
    console.log('321')
    this.getData();
  }
  dropComplete(index, obj){
    //重新排序
    var idx = this.content.indexOf(obj);             
    this.content.splice(idx,1);
    this.content.splice(index,0,obj);  
} 

  ngOnInit() {
  //  this.getData();
    console.log('jinru')
  /*   this.quoteList1 = this.quoteList.slice(0,3);
    console.log('this is list1' +    this.quoteList1 );
    console.log('this is list' +    this.quoteList ); */
  
   console.log('this is list1' +    this.quoteList1 )
  }
  showThings(size){
    if(size == 3){
      this. quoteList1 =  this.quoteList.slice(0,size);
    }else if(size == 6){
      this. quoteList1 =  this.quoteList.slice(3,size);
    }else{
      this. quoteList1 =  this.quoteList.slice(6,size);
    }
    
  }
  tabEvent(event){
    let pathList = ['recommend', 'dayinfo', 'hushen','kechuang']
    this.router.navigate(['', pathList[event]],{
      queryParams: {
        key : pathList[event]
      }
    });


  }
  async getData(){
    let result = await axios.get('http://localhost:8089/api/index/quote');
    console.log('123');
    
    this.quoteList = result.data.data.items;
    console.log(this.quoteList )
    this.showThings(3);
    this.tabEvent(0)

  }

}
