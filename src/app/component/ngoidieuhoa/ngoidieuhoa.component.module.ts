import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//import { ChooseTripPageRoutingModule } from './choosetrip-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgoiDieuHoaComponent } from './ngoidieuhoa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ChooseTripPageRoutingModule,
    RouterModule.forChild([
      {path: "", 
      component: NgoiDieuHoaComponent}
    ]),
    HttpClientModule,
  ],
  declarations: [NgoiDieuHoaComponent],

})
export class NgoiDieuHoaComponentModule {}
