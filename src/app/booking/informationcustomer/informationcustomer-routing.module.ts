import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationCustomerPage } from './informationcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: InformationCustomerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationCustomerPageRoutingModule {}
