import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informationticket',
  templateUrl: 'informationticket.page.html',
  styleUrls: ['informationticket.page.scss'],
})
export class InformationTicketPage {

  constructor(private router: Router, private NavCtr : NavController) {}
  goback(){
    this.NavCtr.back();
  }
  onClick(){
    this.router.navigate(['informationcustomer'])
  }
}
