import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ChooseChairPage } from './choosechair/choosechair.page';
import { ModalPage } from './choosenumber/modal';
import { UserProvider } from '../../service/userprovider';
import { SearchGoPage } from './search/searchgo/searchgo.page';
import { SearchComePage } from './search/searchcome/searchcome.page';
import { GoDayPage } from './calendar/goday/goday.page';
import { ComeDayPage } from './calendar/comeday/comeday.page';
import { ProviderBooking } from 'src/service/providerBooking';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public ischeck: boolean = false;
  public isShowKhuHoi;
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
  public ngaydi;
  public dayCome;
  public maGaDi;
  public maGaDen;
  public loaiCho;
  private valid;
 // public status: ChoChinhStatus

  constructor(
    private router: Router,
    private modalController: ModalController,
    public _userProvider: UserProvider,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private formBuilder: FormBuilder,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.daygos = this._userProvider.titlego 
    // console.log(this.daygos)
    //this._userProvider.ischeck = this.ischeck
    this._zone.run(() => {
      this._userProvider.itemGaChange.pipe().subscribe((data) => {
        if (data) {
          //ga di
          this.GaBacNamDi = this._userProvider.tenGaDi;
          this.maGaDi = this._userProvider.listGaBacNam;
          //ga den
          this.GaBacNamDen = this._userProvider.tenGaDen;
          this.maGaDen = this._userProvider.listGaBacNamden;
          //ngay thang
          this.ngaydi = this._userProvider.titlego;
          this.dayCome = this._userProvider.titleCome;
          //this.dayGokhuhoi = this._userProvider.dayGokhuhoi;
          //doi tuong
          this.khachHang = this._userProvider.listDoiTuongKH;
          //nhom cho
          this.nhomCho = this._userProvider.name;
          this.loaiCho = this._userProvider.listNhomCho;
          //console.log(this._userProvider)
        }
      });

    })
   // console.log(this.status);
  //  this.validation = this.formBuilder.group({
  //     gadi: new FormControl('', Validators.required),
  //     gaden: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('')
  //     ]))
  //  });
   this.valid = new FormGroup({
   gadi: new FormControl('', Validators.required),
   gaden: new FormControl('', Validators.required),
   ngay: new FormControl('', Validators.required),
   doituong: new FormControl('', Validators.required),
   chongoi: new FormControl('', Validators.required),
});

  }

  gobooking() {
    
    
    if(this.GaBacNamDi !== undefined && this.GaBacNamDen !== undefined &&this.ngaydi !== undefined && this.khachHang !== undefined && this.nhomCho !== undefined){
    this.router.navigate(['choosetrip']);
    this._providerBooking.maGaDi = this.maGaDi
    this._providerBooking.maGaDen = this.maGaDen
    this._providerBooking.loaiCho = this.loaiCho
    //this._providerBooking.dayCome = this.dayCome;
    this._providerBooking.ngayDi = this.ngaydi;
    this._providerBooking.gaDi = this.GaBacNamDi;
    this._providerBooking.gaDen = this.GaBacNamDen;
    this._providerBooking.loaive = this.isShowKhuHoi;
    this._providerBooking.itemChange.emit(1);
    
    }else{
      console.log("Bạn phải nhập đầy đủ!");
    }
  }
  onChange(event){
    if(this.ischeck == false){
      this.dayCome = "";
      this.isShowKhuHoi = 0;
    }if(this.ischeck == true){
      this.isShowKhuHoi = 1;
    }
  }
  selectedMovie() {

  }
  async _openModalSearchCome() {
    const modal = await this.modalController.create({
      component: SearchComePage,
      cssClass: 'my-modal-component-cssss'
    })
    await modal.present();

  }
  async _openModalSearchGo() {
    const modal = await this.modalController.create({
      component: SearchGoPage,
      cssClass: 'my-modal-component-cssss'
    })
    await modal.present();

  }

  async _openModalCalendarcome() {
    const modal = await this.modalController.create({
      component: ComeDayPage,
      cssClass: 'my-modal-calendarcome-css'
    })
    await modal.present();
    // console.log(this.dayCome);
    this._userProvider.titleCome = this.dayCome;
    this._userProvider.titlego = this.ngaydi;

    this._userProvider.itemGaChange.emit(1);
  }

  async _openModalCalendargo() {
    const modal = await this.modalController.create({
      component: GoDayPage,
      cssClass: 'my-modal-calendargo-css'
    })
    await modal.present();
    this._userProvider.titlego = this.ngaydi;
    this._userProvider.itemGaChange.emit(1);
    //   console.log(this.dayGo)
  }

  async _openModalChooseNumber() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-modal-choosenumber-css'
    })
    await modal.present();

  }

  async _openModalChoosechair() {
    const modal = await this.modalController.create({
      component: ChooseChairPage,
      cssClass: 'my-modal-choosechair-css',
    })
    await modal.present();


  }
}