import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choosetrip',
  templateUrl: 'choosetrip.page.html',
  styleUrls: ['choosetrip.page.scss'],
})
export class ChooseTripPage {
  public isdisabled: boolean = true
  constructor(private router: Router, private NavCtr : NavController) {}
  goback(){
    this.NavCtr.back();
  }
  onClick(){
    this.isdisabled = false
  }
  clickbutton(){
      this.router.navigate(['chooseseat'])
  }
}
