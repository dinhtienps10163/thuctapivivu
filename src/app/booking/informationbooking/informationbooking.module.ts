import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InformationBookingPage } from './informationbooking.page';

import { InformationBookingPageRoutingModule } from './informationbooking-routing.module';
import { InformationCustomerPage } from '../informationcustomer/informationcustomer.page';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { BookingService } from 'src/service/bookingservice';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationBookingPageRoutingModule,
    RouterModule.forChild([
      {path: "", 
      component: InformationBookingPage}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [InformationBookingPage, InformationCustomerPage],
  providers:[BookingService]
})
export class InformationBookingPageModule {}
