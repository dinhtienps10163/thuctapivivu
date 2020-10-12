import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchGoDetailPage } from './searchgodetail.page';

import { SearchGoDetailPageRoutingModule } from './searchgodetail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { service } from '../../../../service/service';
import { HomePage } from '../../home.page';
import { UserProvider } from 'src/service/ultility';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SearchGoDetailPageRoutingModule,
    
  ],
  declarations: [SearchGoDetailPage ],
  providers:[service, UserProvider],
})
export class SearchGoDetailPageModule {}
