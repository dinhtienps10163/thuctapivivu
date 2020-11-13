import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BookingService } from 'src/service/bookingservice';
import { ProviderBooking } from 'src/service/providerBooking';
@Component({
  selector: 'app-informationbooking',
  templateUrl: 'informationbooking.page.html',
  styleUrls: ['informationbooking.page.scss'],
})
export class InformationBookingPage {
  isCheck: boolean = false;
  public time;
  public chonghe: any = [];
  public chontau: any = [];
  submitted = false;
  public ngaydi;
  public ngayve;
  public doituong;
  public doituong2;
  public doituong3;
  public doituong4;
  public tongTien;
  public ve1:any = "";
  public ve2:any = "";
  public ve3:any = "";
  public ve4:any = "";
  public thanhTien: any = "";
  //thong tin khach hang
  public thongtin: any = [];
  public thongtin2: any = [];
  public thongtin3: any = [];
  public thongtin4: any = [];

  //data booking
  constructor(private router: Router,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private NavCtr: NavController,
    private bookingService: BookingService,
  ) {

    this._zone.run(() => {
      this.chonghe = this._providerBooking.chonghe;
      this.ngaydi = this._providerBooking.ngayDi;
      this.chontau = this._providerBooking.chontau;

      this.doituong = this._providerBooking.doiTuong;
      this.doituong2 = this._providerBooking.doiTuong2;
      this.thongtin = this._providerBooking.hanhkhach;
      this.thongtin2 = this._providerBooking.hanhkhachhai;
      this.thongtin3 = this._providerBooking.hanhkhachba;
      this.doituong3 = this._providerBooking.doiTuong3;
      this.thongtin4 = this._providerBooking.hanhkhachtu;
      this.doituong4 = this._providerBooking.doiTuong4;
      this.ve1 = this.chonghe[0].TienThu;
      this.tongTien = this.ve1*1000

      if (this.chonghe[1]) {
        this.ve2 = this.chonghe[1].TienThu;
        this.tongTien = (this.ve1 + this.ve2)*1000;

      }
      if (this.chonghe[2]) {
        this.ve3 = this.chonghe[2].TienThu;
        this.tongTien = (this.ve1 + this.ve2 + this.ve3)*1000;

      }
      if (this.chonghe[3]) {
        this.ve4 = this.chonghe[3].TienThu;
        this.tongTien = (this.ve1 + this.ve2 + this.ve3 + this.ve4)*1000 ;

      }
    })
  }
  ngOnInit() {

  }
  checked(ev) {

  }
  saveBooking() {
    this._providerBooking.tongTien = this.tongTien;
    this.router.navigate(['payticket']);
    // this.bookingService.create(this.booking).then(()=>{

    //   this.submitted = true;
    // })
    //console.log(this.booking);

  }
  newBooking(): void {
    this.submitted = false;
    //this.booking = new ModelBooking();
  }
  goback() {
    this.NavCtr.back();
  }
}
