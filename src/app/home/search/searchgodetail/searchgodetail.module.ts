import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchGoDetailPage } from './searchgodetail.page';

import { SearchGoDetailPageRoutingModule } from './searchgodetail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGoDetailPageRoutingModule
  ],
  declarations: [SearchGoDetailPage]
})
export class SearchGoDetailPageModule {}
