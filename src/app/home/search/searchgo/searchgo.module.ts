import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchGoPage } from './searchgo.page';

import { SearchGoPageRoutingModule } from './searchgo-routing.module';
import { service } from '../../../../service/service';
import { UserProvider } from 'src/service/userprovider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGoPageRoutingModule
  ],
  declarations: [SearchGoPage],
  providers:[service, UserProvider],

})
export class SearchGoPageModule {}
