import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BrowserModule } from '@angular/platform-browser';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchGoDetailPage } from './search/searchgodetail/searchgodetail.page';
import { ModalPage } from './choosenumber/modal';
import { ChooseChairPage } from './choosechair/choosechair.page';
import { CalendarPage } from './calendar/calendar.page';
import { MainDayPage } from './calendar/tab-calendar/mainday/mainday.page';
import { GoDayPage } from './calendar/tab-calendar/goday/goday.page';
import { ComeDayPage } from './calendar/tab-calendar/comeday/comeday.page';
import { NgCalendarModule  } from 'ionic2-calendar';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BrowserModule,
    NgCalendarModule,

  ],
  declarations: [HomePage, SearchGoDetailPage, ChooseChairPage, ModalPage, CalendarPage, MainDayPage, GoDayPage, ComeDayPage]
})
export class HomePageModule {}
