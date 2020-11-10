import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GoDayPage } from './goday.page';
import { NgCalendarModule  } from 'ionic2-calendar';

import { GoDayPageRoutingModule } from './goday-routing.module';
import { UserProvider } from 'src/service/userprovider';
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoDayPageRoutingModule,
    NgCalendarModule,
    CalendarModule,
  ],
  declarations: [GoDayPage],
  providers:[{provide: LOCALE_ID, useValue: "vi"}, UserProvider ],

})
export class GoDayPageModule {}
