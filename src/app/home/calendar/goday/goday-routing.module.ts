import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoDayPage } from './goday.page';

const routes: Routes = [
  {
    path: '',
    component: GoDayPage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoDayPageRoutingModule {}
