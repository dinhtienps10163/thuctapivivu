import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTripPage } from './choosetrip.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseTripPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseTripPageRoutingModule {}
