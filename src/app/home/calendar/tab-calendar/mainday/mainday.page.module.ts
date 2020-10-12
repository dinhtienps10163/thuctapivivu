import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainDayPage } from './mainday.page';

import { MainDayPageRoutingModule } from './mainday-routing.module';
import { UserProvider} from '../../../../../service/ultility';
import { GoDayPage } from '../goday/goday.page';
import { ComeDayPage } from '../comeday/comeday.page';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDayPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [MainDayPage, GoDayPage, ComeDayPage],
  providers:[UserProvider],

})
export class MainDayPageModule {}
