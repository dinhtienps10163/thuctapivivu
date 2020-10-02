import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DanhMucPage } from './danhmuc.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DanhMucPageRoutingModule } from './danhmuc-routing.module';
import { service } from './service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HttpClient,
    BrowserModule,
    DanhMucPageRoutingModule,
  ],
  declarations: [DanhMucPage ],
  providers:[service],

})
export class DanhMucPageModule {}
