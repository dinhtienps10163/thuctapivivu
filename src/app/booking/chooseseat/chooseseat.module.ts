import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChooseSeatPage } from './chooseseat.page';

import { ChooseSeatPageRoutingModule } from './chooseseat-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseSeatPageRoutingModule
  ],
  declarations: [ChooseSeatPage]
})
export class ChooseSeatPageModule {}
