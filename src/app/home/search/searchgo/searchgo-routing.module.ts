import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGoPage } from './searchgo.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGoPageRoutingModule {}
