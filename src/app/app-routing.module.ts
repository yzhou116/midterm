import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component'
import {ChooseComponent} from './view/choose/choose.component'
import {NewstockComponent} from './view/newstock/newstock.component'
import { RecommendComponent } from './component/recommend/recommend.component';
import { DayinfoComponent } from './component/dayinfo/dayinfo.component';
import { TestphpComponent } from './component/testphp/testphp.component';


const routes: Routes = [
  {
    path:"",
    component: IndexComponent,
    children:[
      {
        path : "recommend",
        component : RecommendComponent
      },
      {
        path : "dayinfo",
        component : DayinfoComponent
      },
      {
        path : "hushen",
        component : DayinfoComponent
      },
      {
        path : "kechuang",
        component : DayinfoComponent
      }

    ]
  },
  {
    path:"scanner",
    component: ChooseComponent
  },
  {
    path:"newstock",
    component: NewstockComponent
  },
  {
    path:"testphp",
    component: TestphpComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
