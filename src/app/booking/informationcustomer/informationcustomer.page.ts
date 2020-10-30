import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informationcustomer',
  templateUrl: 'informationcustomer.page.html',
  styleUrls: ['informationcustomer.page.scss'],
})
export class InformationCustomerPage {
  isHidden: boolean = false;
  constructor(private router: Router, private NavCtr : NavController) {}
  goback(){
    this.NavCtr.back();
  }
}
