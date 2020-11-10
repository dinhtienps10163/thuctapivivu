import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BookingService } from 'src/service/bookingservice';
import { ProviderBooking } from 'src/service/providerBooking';
import ModelBooking from '../../../service/modelBooking';

@Component({
  selector: 'app-payticket',
  templateUrl: 'payticket.html',
  styleUrls: ['payticket.scss'],
})
export class PayTicketPage {
    public time;
    public chonghe:any = [];
    booking: ModelBooking = new ModelBooking();
    submitted = false;
  constructor(private router: Router,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private NavCtr: NavController,
    private bookingService : BookingService,) {}
    
  saveBooking(){
    // setTimeout(() => {
    //   console.log(this.booking);
    // }, 3000);

    this.bookingService.create(this.booking).then(()=>{
      
      this.submitted = true;
    })
    console.log(this.booking);
    
  }
  newBooking(): void{
    this.submitted = false;
    this.booking = new ModelBooking();
  }
  goback() {
    this.NavCtr.back();
  }
}
