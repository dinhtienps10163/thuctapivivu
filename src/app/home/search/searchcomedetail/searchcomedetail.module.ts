import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchComeDetailPage } from './searchcomedetail.page';

import { SearchComeDetailPageRoutingModule } from './searchcomedetail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { service } from '../../../../service/service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SearchComeDetailPageRoutingModule
  ],
  declarations: [SearchComeDetailPage],
  providers:[service],
})
export class SearchComeDetailPageModule {}
