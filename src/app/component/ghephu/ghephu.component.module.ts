import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//import { ChooseTripPageRoutingModule } from './choosetrip-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GhePhuComponent } from './ghephu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ChooseTripPageRoutingModule,
    RouterModule.forChild([
      {path: "", 
      component: GhePhuComponent}
    ]),
    HttpClientModule,
  ],
  declarations: [GhePhuComponent],

})
export class GhePhuComponentModule {}
