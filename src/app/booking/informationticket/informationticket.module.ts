import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InformationTicketPage } from './informationticket.page';

import { InformationTicketPageRoutingModule } from './informationticket-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationTicketPageRoutingModule
  ],
  declarations: [InformationTicketPage]
})
export class InformationTicketPageModule {}
