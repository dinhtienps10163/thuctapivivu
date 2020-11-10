import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationBookingPage } from './informationbooking.page';

const routes: Routes = [
  {
    path: '',
    component: InformationBookingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationBookingPageRoutingModule {}
