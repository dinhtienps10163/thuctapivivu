import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserPage } from './loginuser.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUserPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginUserPageRoutingModule {}
