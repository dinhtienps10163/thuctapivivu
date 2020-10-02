import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchGoPage } from './searchgo.page';

import { SearchGoPageRoutingModule } from './searchgo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGoPageRoutingModule
  ],
  declarations: [SearchGoPage]
})
export class SearchGoPageModule {}
