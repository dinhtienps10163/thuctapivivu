import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InformationCustomerPage } from './informationcustomer.page';

import { InformationCustomerPageRoutingModule } from './informationcustomer-routing.module';
import { Firebase } from '@ionic-native/firebase';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationCustomerPageRoutingModule,
  ],
  declarations: [InformationCustomerPage],


})
export class InformationCustomerPageModule {}
