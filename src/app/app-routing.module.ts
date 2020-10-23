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
    path: 'itemtoaxeconponent',
    loadChildren: () => import('./component/itemtoaxe.module.component').then(m => m.ItemToaXeComponentModule)
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
