import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ChooseChairPage } from './home/choosechair/choosechair.page';
import { ModalPage } from './home/choosenumber/modal';
import { HomePage } from './home/home.page';
import { CalendarPage } from './home/calendar/calendar.page';
import { UserProvider } from 'src/service/ultility';
import { MainDayPage } from './home/calendar/tab-calendar/mainday/mainday.page';
@NgModule({
  declarations: [AppComponent , ChooseChairPage, ModalPage, HomePage, ],
  entryComponents: [],
  imports: [ 
    MbscModule, BrowserModule, 
    
    FormsModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, NgCalendarModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
