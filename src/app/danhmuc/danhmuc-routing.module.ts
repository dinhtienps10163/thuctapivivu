import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DanhMucPage } from './danhmuc.page';


const routes: Routes = [
  {
    path: '',
    component: DanhMucPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class DanhMucPageRoutingModule {}
