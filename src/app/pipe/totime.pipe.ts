import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
//管道符 toime
//写法{{item.createdTime | totime}}
//后台回来的数据是01132021这样，你自己需要用管道符来修改时间的格式
//修改之后回去的格式可能是 带着GMT xxxxx之类的，需要继续用管道符再次修改。比如
//{{item.createdTime | totime | date : 'yyyy-mm-dd HH:MM:SS'}}
export class TotimePipe implements PipeTransform {

  transform(value, ...args) {
    let time = new Date();
    time.setTime(value);

    return time;
  }

}
