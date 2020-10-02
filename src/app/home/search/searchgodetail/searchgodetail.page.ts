import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-searchgodetail',
  templateUrl: 'searchgodetail.page.html',
  styleUrls: ['searchgodetail.page.scss'],
})
export class SearchGoDetailPage {

  constructor(private router: Router, private NavCtr : NavController) {}

  goback(){
    this.NavCtr.back();
  }
  next(){
    this.router.navigate(['searchgodetail'])
  }
}
