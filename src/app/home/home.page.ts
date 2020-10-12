import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { listNhomCho } from '../../service/model';
import { ChooseChairPage } from './choosechair/choosechair.page';
import { ModalPage } from './choosenumber/modal';
import { UserProvider } from '../../service/ultility';
import { ResourceLoader } from '@angular/compiler';
import { CalendarPage } from './calendar/calendar.page';
import { SearchGoPage } from './search/searchgo/searchgo.page';
import { SearchComePage } from './search/searchcome/searchcome.page';
import { MainDayPage } from './calendar/tab-calendar/mainday/mainday.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public ischeck: boolean = false
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.2,
  };
  public nhomCho;
  public GaBacNamDi;
  public dayGo;
  public dayCome;
  public khachHang;
  public GaBacNamDen;
  constructor(private router: Router,
    public calendar: CalendarPage,
    private modalController: ModalController, public _userProvider: UserProvider) { }

  ngOnInit() {
    // this.daygos = this._userProvider.titlego 
    // console.log(this.daygos)
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {
        this.nhomCho = this._userProvider.listNhomCho;
        this.GaBacNamDi = this._userProvider.listGaBacNam;
        this.dayGo = this._userProvider.titlego;
        this.khachHang = this._userProvider.listDoiTuongKH;
        this.GaBacNamDen = this._userProvider.listGaBacNamden;
        this.dayCome = this._userProvider.titlecome;
      }

    })
  }
  selectedMovie(event) {
    console.log(event)
  }
  async _openModalSearchCome() {
    const modal = await this.modalController.create({
      component: SearchComePage,
      cssClass: 'my-modal-component-cssss'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    // this.khachHang = this._userProvider.listDoiTuongKH;
    //   console.log(this.khachHang)
  }
  async _openModalSearchGo() {
    const modal = await this.modalController.create({
      component: SearchGoPage,
      cssClass: 'my-modal-component-cssss'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    // this.khachHang = this._userProvider.listDoiTuongKH;
    //   console.log(this.khachHang)
  }
  Calendar() {
    this.router.navigate(['mainday/goday'])
  }
  Calendars() {
    this.router.navigate(['mainday/comeday'])
  }
  async _openModalCalendar() {
    const modal = await this.modalController.create({
      component: CalendarPage,
      cssClass: 'my-modal-component-csss'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    // this.khachHang = this._userProvider.listDoiTuongKH;
    //   console.log(this.khachHang)
  }
  clickbutton() {
    this.router.navigate(['choosetrip'])

  }
  async _openModalChooseNumber() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-modal-component-css'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    this.khachHang = this._userProvider.listDoiTuongKH;
    console.log(this.khachHang)
  }
  async _openModalChoosechair() {
    const modal = await this.modalController.create({
      component: ChooseChairPage,
      cssClass: 'my-modal-component-scss',
    })
    await modal.present();
    // const event:any = modal.onDidDismiss();
    // console.log(event);
    this.nhomCho = this._userProvider.listNhomCho;
    console.log(this.nhomCho)
  }
}