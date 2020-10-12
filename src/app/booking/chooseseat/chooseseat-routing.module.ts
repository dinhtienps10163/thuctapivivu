import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseSeatPage } from './chooseseat.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseSeatPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseSeatPageRoutingModule {}
