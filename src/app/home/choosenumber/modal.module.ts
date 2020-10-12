import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ModalPage } from './modal';

import { ModalPageRoutingModule } from './modal-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { service } from '../../../service/service';
import { HomePage } from '../home.page';
import { MbscModule } from '@mobiscroll/angular';



@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MbscModule,
    HttpClientModule,

    
    ModalPageRoutingModule
  ],
  declarations: [ModalPage, HomePage ],
  providers:[service],
})
export class ModalPageModule {}
