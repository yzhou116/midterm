import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseComponent } from './view/choose/choose.component';
import { NewstockComponent } from './view/newstock/newstock.component';
import { IndexComponent } from './view/index/index.component';
import { RecommendComponent } from './component/recommend/recommend.component';
import { DayinfoComponent } from './component/dayinfo/dayinfo.component';
import { TotimePipe } from './pipe/totime.pipe';
import { TestphpComponent } from './component/testphp/testphp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { YizhouComponent } from './yizhou/yizhou.component';
import {FormsModule} from '@angular/forms';
import { NewoneComponent } from './newone/newone.component'


@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    NewstockComponent,
    IndexComponent,
    RecommendComponent,
    DayinfoComponent,
    TotimePipe,
    TestphpComponent,
    YizhouComponent,
    NewoneComponent,
   // DragDropModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
