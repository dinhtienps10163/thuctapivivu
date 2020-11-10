import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChooseTripPage } from './choosetrip.page';

//import { ChooseTripPageRoutingModule } from './choosetrip-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProviderBooking } from 'src/service/providerBooking';
import { ChooseSeatPage } from '../chooseseat/chooseseat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ChooseTripPageRoutingModule,
    RouterModule.forChild([
      {path: "", 
      component: ChooseTripPage}
    ]),
    HttpClientModule,
  ],
  declarations: [ChooseTripPage, ChooseSeatPage],

})
export class ChooseTripPageModule {}
