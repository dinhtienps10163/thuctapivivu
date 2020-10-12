import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from '../account/account.page';
import { HomePage } from '../home/home.page';
import { NofiticationPage } from '../nofitication/nofitication.page';
import { TripPage } from '../trip/trip.page';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'trip',
        component: TripPage,
      },
      {
        path: 'nofitication',
        component: NofiticationPage,
      },
      {
        path: 'account',
        component: AccountPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
