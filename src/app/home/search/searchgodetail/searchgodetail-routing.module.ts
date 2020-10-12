import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../../home.page';
import { SearchGoDetailPage } from './searchgodetail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGoDetailPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGoDetailPageRoutingModule {}
