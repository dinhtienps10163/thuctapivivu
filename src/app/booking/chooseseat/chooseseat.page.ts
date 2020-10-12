import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chooseseat',
  templateUrl: 'chooseseat.page.html',
  styleUrls: ['chooseseat.page.scss'],
})
export class ChooseSeatPage {

  constructor(private router: Router, private NavCtr : NavController) {}
  goback(){
    this.NavCtr.back();
  }
  onClick(){
    this.router.navigate(['informationticket'])
  }
}
