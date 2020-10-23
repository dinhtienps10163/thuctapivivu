import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainPage } from './main.page';

import { MainPageRoutingModule } from './Main-routing.module';
import { UserProvider} from '../../service/ultility';
import { CalendarPage } from '../home/calendar/calendar.page';
import { SearchGoPage } from '../home/search/searchgo/searchgo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
  ],
  declarations: [MainPage],
  providers:[UserProvider, CalendarPage],

})
export class MainPageModule {}
