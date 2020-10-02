import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGoDetailPage } from './searchgodetail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGoDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGoDetailPageRoutingModule {}
