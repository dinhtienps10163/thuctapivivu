import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from '../account/account.page';
import { NofiticationPage } from '../nofitication/nofitication.page';
import { TripPage } from './trip.page';

const routes: Routes = [
  {
    path: '',
    component: TripPage,
    children:[
      {
        path: 'sapdi',
        component: NofiticationPage
      },
      {
        path: 'dadi',
        component: AccountPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripPageRoutingModule {}
