import { Injectable } from '@angular/core';
import axios from 'axios'
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  host = 'http://localhost:8089'

  constructor() { }
 async getNews(category){
    //10 is gobal, 12 is shang hai, 13 hongkong, 11 america
   let httpUrl = this.host + `/api/index/hotstock?category=${category}`
   let result = await axios.get(httpUrl);
   console.log(result);
   return result;

  }
  async getInstory(){
    let httpUrl = this.host + `/api/index/industory`
    let result = await axios.get(httpUrl);
    return result;
  }
  async getAreas(){
    let httpUrl = this.host + `/api/index/area`
    let result = await axios.get(httpUrl);
    return result;
  }
  async getToolsItem(){
    let httpUrl = this.host + `/api/index/tool`
    let result = await axios.get(httpUrl);
    return result;
  }
  /* ,{
      params: {
        'field': field
      }
    } */
  async getRange(field){
   // console.log('this is service filed' + field);
    let httpUrl = this.host + `/api/choose/con?field=${field}`
    let result = await axios.get(httpUrl);
    console.log('this is service result ' +  result.data.data.min);
    console.log('this is service result ' +  Object.keys(result.data.data.max));
    console.log('this is service result ' + Object.keys(result.data.data.values));
    return result;

  }
  
}
