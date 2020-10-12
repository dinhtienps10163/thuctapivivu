import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rigister',
  templateUrl: 'rigister.page.html',
  styleUrls: ['rigister.page.scss'],
})
export class RigisterPage {

  constructor(private router: Router, private NavCtr: NavController) {}

  goback(){
    this.NavCtr.back();    
  }
}
