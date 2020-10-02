import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NofiticationPage } from './nofitication.page';

import { NofiticationPageRoutingModule } from './nofitication-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NofiticationPageRoutingModule
  ],
  declarations: [NofiticationPage]
})
export class nofiticationPageModule {}
