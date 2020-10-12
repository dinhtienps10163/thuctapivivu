import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchComePage } from './searchcome.page';

import { SearchComePageRoutingModule } from './searchcome-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchComePageRoutingModule
  ],
  declarations: [SearchComePage]
})
export class SearchComePageModule {}
