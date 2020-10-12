import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ComeDayPage } from './comeday.page';
import { NgCalendarModule  } from 'ionic2-calendar';

import { ComeDayPageRoutingModule } from './comeday-routing.module';
import { UserProvider } from 'src/service/ultility';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComeDayPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [ComeDayPage],
  providers:[ UserProvider],

})
export class ComeDayPageModule {}
