import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TripPage } from './trip.page';

import { TripPageRoutingModule } from './trip-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPageRoutingModule
  ],
  declarations: [TripPage]
})
export class TripPageModule {}
