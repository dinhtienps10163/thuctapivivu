import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//import { ChooseTripPageRoutingModule } from './choosetrip-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Khoang4Component } from './khoang4.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ChooseTripPageRoutingModule,
    RouterModule.forChild([
      {path: "", 
      component: Khoang4Component}
    ]),
    HttpClientModule,
  ],
  declarations: [Khoang4Component],

})
export class Khoang4ComponentModule {}
