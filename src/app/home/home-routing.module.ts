import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTripPage } from '../booking/choosetrip/choosetrip.page';
import { ComeDayPage } from './calendar/comeday/comeday.page';
import { GoDayPage } from './calendar/goday/goday.page';
import { HomePage } from './home.page';
import { SearchGoPage } from './search/searchgo/searchgo.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'choosetrip',
    component: ChooseTripPage,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
