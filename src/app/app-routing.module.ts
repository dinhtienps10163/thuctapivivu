import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.page.module').then( m => m.MainPageModule)
  },
  {
    path: 'searchgo',
    loadChildren: () => import('./home/search/searchgo/searchgo.module').then( m => m.SearchGoPageModule)
  },
  {
    path: 'searchgodetail',
    loadChildren: () => import('./home/search/searchgodetail/searchgodetail.module').then( m => m.SearchGoDetailPageModule)
  },
  {
    path: '',
    redirectTo: 'main',
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
