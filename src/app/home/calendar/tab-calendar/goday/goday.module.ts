import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GoDayPage } from './goday.page';
import { NgCalendarModule  } from 'ionic2-calendar';

import { GoDayPageRoutingModule } from './goday-routing.module';
import { UserProvider } from 'src/service/ultility';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoDayPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [GoDayPage],
  providers:[ UserProvider],

})
export class GoDayPageModule {}
