import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RigisterPage } from './rigister.page';

import { RigisterPageRoutingModule } from './rigister-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RigisterPageRoutingModule
  ],
  declarations: [RigisterPage]
})
export class RigisterPageModule {}
