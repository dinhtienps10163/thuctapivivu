import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComePage } from './searchcome.page';

const routes: Routes = [
  {
    path: '',
    component: SearchComePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchComePageRoutingModule {}
