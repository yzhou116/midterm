import { Component, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'yipractice';
  isActive:string = "index"
 // @Output()  17706
  public userName:string = "yizhou";
  public userGG:string = "dashabi";
  public father:string="";

  @ViewChild('c0', {static:true})
  public child0;
  @ViewChild('c1',{static:true})
  public child1;




  TheAtive(dom){
   // console.log(dom);
   this.isActive = dom;
   console.log(dom);

  }
  ChangeMyname(){
    if(this.userName = "yizhou"){
      this.userName = "JohnZhou";
      this.userGG = "The Moron"
    //  console.log(   this.userName);
    }else if(this.userName = "JohnZhou"){
      this.userName = "JohnstonZhou";
      console.log(   this.userName);
    }else{
      this.userName = "yizhou";
      console.log(this.userName);
    }
    
  }
  takeEvent(event){
    console.log("takeEvent(): " + event);
    this.father = event;

  }
  print(){
   // console.log(this.child0);
   console.log('This is how I get child data');
    console.log(this.child1.child1);
  }
}
