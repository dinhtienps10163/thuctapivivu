import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ComeDayPage } from './comeday.page';

import { ComeDayPageRoutingModule } from './comeday-routing.module';
import { UserProvider } from 'src/service/userprovider';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComeDayPageRoutingModule,
    NgCalendarModule,
    CalendarModule
  ],
  declarations: [ComeDayPage],
  providers:[{provide: LOCALE_ID, useValue: "vi"}, UserProvider],

})
export class ComeDayPageModule {}
