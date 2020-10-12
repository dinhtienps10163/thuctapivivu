import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginUserPage } from './loginuser.page';

import { LoginUserPageRoutingModule } from './loginuser-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUserPageRoutingModule
  ],
  declarations: [LoginUserPage]
})
export class LoginUserPageModule {}
