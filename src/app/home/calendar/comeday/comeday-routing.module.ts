import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComeDayPage } from './comeday.page';

const routes: Routes = [
  {
    path: '',
    component: ComeDayPage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComeDayPageRoutingModule {}
