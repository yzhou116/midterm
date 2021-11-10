import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yizhou',
  templateUrl: './yizhou.component.html',
  styleUrls: ['./yizhou.component.less']
})
export class YizhouComponent implements OnInit {
  @Input()
  public child2:string = "aaa";
  @Input()
  public child1:string = "ggg";

  public userInput:string = "";
  @Output()
  public event = new EventEmitter();

  

  constructor() { }
  @Input()
  ngOnInit(): void {
    
  }
  Modify(){
  //  console.log(this.userInput);
    this.event.emit(this.userInput);

  }

}
