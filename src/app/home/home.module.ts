import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HomePage } from './home.page';
import { BrowserModule } from '@angular/platform-browser';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalPage } from './choosenumber/modal';
import { ChooseChairPage } from './choosechair/choosechair.page';
import { GoDayPage } from './calendar/goday/goday.page';
import { ComeDayPage } from './calendar/comeday/comeday.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';
import { SearchGoPage } from './search/searchgo/searchgo.page';
import { ProviderBooking } from 'src/service/providerBooking';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BrowserModule,
    NgCalendarModule,
    CalendarModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  declarations: [HomePage, ChooseChairPage, ModalPage, GoDayPage, ComeDayPage],
  providers: [{provide: LOCALE_ID, useValue: "vi"}, ProviderBooking]
})
export class HomePageModule {}
