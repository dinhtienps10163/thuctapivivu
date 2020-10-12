import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home.page';
import { ModalPage } from './modal';

const routes: Routes = [
  {
    path: '',
    component: ModalPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ModalPageRoutingModule {}
