import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.page.module').then(m => m.MainPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'searchgo',
    loadChildren: () => import('./home/search/searchgo/searchgo.module').then(m => m.SearchGoPageModule)
  },
  {
    path: 'searchcome',
    loadChildren: () => import('./home/search/searchcome/searchcome.module').then(m => m.SearchComePageModule)
  },
  {
    path: 'searchgo/searchgodetail',
    loadChildren: () => import('./home/search/searchgodetail/searchgodetail.module').then(m => m.SearchGoDetailPageModule)
  },
  {
    path: 'searchcomedetail',
    loadChildren: () => import('./home/search/searchcomedetail/searchcomedetail.module').then(m => m.SearchComeDetailPageModule)
  },
  {
    path: 'loginuser',
    loadChildren: () => import('./login/loginuser/loginuser.module').then(m => m.LoginUserPageModule)
  },
  {
    path: 'rigister',
    loadChildren: () => import('./login/rigister/rigister.module').then(m => m.RigisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./home/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'choosetrip',
    loadChildren: () => import('./booking/choosetrip/choosetrip.module').then(m => m.ChooseTripPageModule)
  },
  {
    path: 'chooseseat',
    loadChildren: () => import('./booking/chooseseat/chooseseat.module').then(m => m.ChooseSeatPageModule)
  },
  {
    path: 'informationticket',
    loadChildren: () => import('./booking/informationticket/informationticket.module').then(m => m.InformationTicketPageModule)
  },
  {
    path: 'informationcustomer',
    loadChildren: () => import('./booking/informationcustomer/informationcustomer.module').then(m => m.InformationCustomerPageModule)
  },
  {
    path: 'mainday',
    loadChildren: () => import('./home/calendar/tab-calendar/mainday/mainday.page.module').then(m => m.MainDayPageModule)
  },
  {
    path: 'goday',
    loadChildren: () => import('./home/calendar/tab-calendar/goday/goday.module').then(m => m.GoDayPageModule)
  },
  {
    path: 'comeday',
    loadChildren: () => import('./home/calendar/tab-calendar/comeday/comeday.module').then(m => m.ComeDayPageModule)
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
