import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-searchgo',
  templateUrl: 'searchgo.page.html',
  styleUrls: ['searchgo.page.scss'],
})
export class SearchGoPage {

  constructor(private router: Router ,private NavCtr : NavController) {}

  goback(){
    this.NavCtr.back();
  }
  next(){
    this.router.navigate(['searchgodetail'])
  }
}
