import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit {
  newlist:any = [];

  constructor(public activedrouter: ActivatedRoute,public news: NewsService) { }

  ngOnInit() {
  //  this.news.getNews(11);
  this.activedrouter.queryParams.subscribe((params)=>{
console.log(params);
switch(params.key){
  case 'hushen':
    break;
    default:
      this.news.getNews(11).then((res)=>{
        console.log(res.data.data.items);
        this.newlist = res.data.data.items;
      })
   
}
  })
  }
  

}
