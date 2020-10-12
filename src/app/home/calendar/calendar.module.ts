import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendar.page';
import { NgCalendarModule  } from 'ionic2-calendar';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { UserProvider } from 'src/service/ultility';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [CalendarPage],
  providers:[ UserProvider],

})
export class CalendarPageModule {}
