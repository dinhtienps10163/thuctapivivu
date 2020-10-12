import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationTicketPage } from './informationticket.page';

const routes: Routes = [
  {
    path: '',
    component: InformationTicketPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationTicketPageRoutingModule {}
