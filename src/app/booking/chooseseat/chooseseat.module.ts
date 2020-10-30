import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCol, IonGrid, IonicModule, IonRow } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChooseSeatPage } from './chooseseat.page';
import { ChooseSeatPageRoutingModule } from './chooseseat-routing.module';
import { NgoiDieuHoaComponent } from 'src/app/component/ngoidieuhoa/ngoidieuhoa.component';
import { Khoang4Component } from 'src/app/component/khoang4/khoang4.component';
import { ToaXeComponent } from 'src/app/component/toaxe/toaxe.component';
import { Khoang6Component } from 'src/app/component/khoang6/khoang6.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ChooseSeatPageRoutingModule
  ],
  declarations: [ChooseSeatPage, NgoiDieuHoaComponent, Khoang4Component, ToaXeComponent, Khoang6Component]
})
export class ChooseSeatPageModule {}
