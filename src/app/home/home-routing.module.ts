import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComeDayPage } from './calendar/tab-calendar/comeday/comeday.page';
import { GoDayPage } from './calendar/tab-calendar/goday/goday.page';
import { HomePage } from './home.page';
import { SearchGoPage } from './search/searchgo/searchgo.page';
import { SearchGoDetailPage } from './search/searchgodetail/searchgodetail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'goday',
    component: GoDayPage,
  },
  {
    path: 'comeday',
    component: ComeDayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
