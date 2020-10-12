import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from '../../../../account/account.page';
import { HomePage } from '../../../../home/home.page';
import { NofiticationPage } from '../../../../nofitication/nofitication.page';
import { ComeDayPage } from '../comeday/comeday.page';
import { GoDayPage } from '../goday/goday.page';
import { MainDayPage } from './mainday.page';

const routes: Routes = [
  {
    path: '',
    component: MainDayPage,
    children:[
      {
        path: 'goday',
        component: GoDayPage,
      },
      {
        path: 'comeday',
        component: ComeDayPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDayPageRoutingModule {}
