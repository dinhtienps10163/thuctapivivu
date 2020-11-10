import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProviderBooking } from 'src/service/providerBooking';

@Component({
  selector: 'app-informationticket',
  templateUrl: 'informationticket.page.html',
  styleUrls: ['informationticket.page.scss'],
})
export class InformationTicketPage {
   public chontau;

   chonghe= [];
   //data booking
  constructor(private router: Router,
    public _providerBooking : ProviderBooking,
    private NavCtr : NavController) {
    this.chontau = this._providerBooking.chontau;
    this.chonghe = this._providerBooking.chonghe;

  }
  goback(){
    this.NavCtr.back();
  }
  onClick(){
    this.router.navigate(['informationcustomer'])

  }

}
