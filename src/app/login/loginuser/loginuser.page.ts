import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginuser',
  templateUrl: 'loginuser.page.html',
  styleUrls: ['loginuser.page.scss'],
})
export class LoginUserPage {

  constructor(private router: Router, private NavCtr: NavController) {}
  goback(){
    this.NavCtr.back()
  }
  login(){
    this.router.navigate(['main'])
  }
}
