import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: 'trip.page.html',
  styleUrls: ['trip.page.scss'],
})
export class TripPage {

  constructor(private router: Router) {}
  onClickLogin(){
    this.router.navigate(['login'])
  }
}
