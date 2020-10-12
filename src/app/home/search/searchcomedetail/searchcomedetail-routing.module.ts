import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComeDetailPage } from './searchcomedetail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchComeDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchComeDetailPageRoutingModule {}
