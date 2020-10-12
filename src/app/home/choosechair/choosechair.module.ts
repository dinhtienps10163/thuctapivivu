import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChooseChairPage } from './choosechair.page';

import { ChooseChairPageRoutingModule } from './choosechair-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { service } from '../../../service/service';
import { HomePage } from '../home.page';
import { UserProvider} from '../../../service/ultility';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ChooseChairPageRoutingModule
  ],
  declarations: [ChooseChairPage, HomePage],
  providers:[service, UserProvider],
})
export class ChooseChairPageModule {}
