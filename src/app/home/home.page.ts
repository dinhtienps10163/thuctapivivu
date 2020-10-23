import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ChooseChairPage } from './choosechair/choosechair.page';
import { ModalPage } from './choosenumber/modal';
import { UserProvider } from '../../service/ultility';
import { CalendarPage } from './calendar/calendar.page';
import { SearchGoPage } from './search/searchgo/searchgo.page';
import { SearchComePage } from './search/searchcome/searchcome.page';
import { GoDayPage } from './calendar/goday/goday.page';
import { ComeDayPage } from './calendar/comeday/comeday.page';
import { ChooseTripPage } from '../booking/choosetrip/choosetrip.page';
import { ProviderBooking } from 'src/service/providerBooking';

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
  public khachHang;
  public doiTuongkhachHang;
  public GaBacNamDen;
  public dayGo;
  public dayCome;

  public maGaDi;
  public maGaDen;
  public ngayDi;
  public loaiCho;
  data
  constructor(
    private router: Router,
    public calendar: CalendarPage,
    private modalController: ModalController, 
    public _userProvider: UserProvider,
    public _providerBooking: ProviderBooking,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.daygos = this._userProvider.titlego 
    // console.log(this.daygos)
    //this._userProvider.ischeck = this.ischeck
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {
        this.nhomCho = this._userProvider.listNhomCho;
        this.GaBacNamDi = this._userProvider.listGaBacNam;
        this.khachHang = this._userProvider.listAmountKH + ' ' + this._userProvider.listDoiTuongKH;
        this.GaBacNamDen = this._userProvider.listGaBacNamden;
        this.dayGo = this._userProvider.titlego;
        this.dayCome = this._userProvider.titleCome;

        this.maGaDi = this._userProvider.maGaDi;
        this.maGaDen = this._userProvider.maGaDen;
        //this.ngayDi = this._userProvider.ngayDi;
        this.loaiCho = this._userProvider.loaiCho;
        //console.log(this._userProvider)
      }
    })
  }

  gobooking() {
    // this.navCtrl.navigateForward('choosetrip');
    this.router.navigate(['choosetrip']);
    this._providerBooking.maGaDi = this.maGaDi
    this._providerBooking.maGaDen = this.maGaDen
    this._providerBooking.ngayDi = this.dayGo
    this._providerBooking.loaiCho = this.loaiCho
    this._providerBooking.itemChange.emit(1);

    //this.router.navigate(['choosetrip'])
    // this._userProvider
    // this.GaBacNamDen
    // this.dayGo
    // this.dayCome
    // this.nhomCho
    // this.khachHang

  }
  selectedMovie() {
    
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
    //this._userProvider.listGaBacNam = this.GaBacNamDi;
    //this._userProvider.itemGaChange.emit(1);
  }

  async _openModalCalendarcome() {
    const modal = await this.modalController.create({
      component: ComeDayPage,
      cssClass: 'my-modal-calendarcome-css'
    })
    await modal.present();
   // console.log(this.dayCome);
    this._userProvider.titleCome = this.dayCome;
    this._userProvider.titlego = this.dayGo;

    this._userProvider.itemGaChange.emit(1);
  }

  async _openModalCalendargo() {
    const modal = await this.modalController.create({
      component: GoDayPage,
      cssClass: 'my-modal-calendargo-css'
    })
    await modal.present();
    this._userProvider.titlego = this.dayGo;
    this._userProvider.itemGaChange.emit(1);
    //   console.log(this.dayGo)
  }
  
  async _openModalChooseNumber() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-modal-choosenumber-css'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    this._userProvider.listAmountKH = this.khachHang;
    this._userProvider.itemGaChange.emit(1);
  }

  async _openModalChoosechair() {
    const modal = await this.modalController.create({
      component: ChooseChairPage,
      cssClass: 'my-modal-choosechair-css',
    })
    await modal.present();
    // const event:any = modal.onDidDismiss();
    // console.log(event);
    // this.nhomCho = this._userProvider.listNhomCho;
    //this._userProvider.listNhomCho = this.nhomCho;
    //this._userProvider.itemselected = this.nhomCho
    //this._userProvider.itemGaChange.emit(1);
   
  }
}