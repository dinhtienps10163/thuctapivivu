import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseChairPage } from './choosechair.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseChairPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseChairPageRoutingModule {}
