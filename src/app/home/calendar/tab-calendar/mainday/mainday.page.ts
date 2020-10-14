import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserProvider } from 'src/service/ultility';

@Component({
  selector: 'app-mainday',
  templateUrl: 'mainday.page.html',
  styleUrls: ['mainday.page.scss'],
})
export class MainDayPage {
  public ischeck: boolean = false
  public dayGo
  public dayCome
  constructor( private router: Router,private modalController: ModalController, public _userProvider: UserProvider) {}

  ngOnInit() {
    // this.daygos = this._userProvider.titlego 
    // console.log(this.daygos)
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {       
        this.dayGo = this._userProvider.titlego;
        this.dayCome = this._userProvider.titlecome;
      }

    })
    
  }

  dismiss() {
    this.router.navigate(['main/home'])
  }
  click() {
     this._userProvider.titlegos = this.dayGo
    this._userProvider.itemGaChange.emit(1);
    console.log(this.dayGo)
    this.modalController.dismiss()
    //this.router.navigate(['main/home'])
  }
}
