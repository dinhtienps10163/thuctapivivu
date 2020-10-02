import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NofiticationPage } from './nofitication.page';

const routes: Routes = [
  {
    path: '',
    component: NofiticationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NofiticationPageRoutingModule {}
