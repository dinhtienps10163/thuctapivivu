import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BookingService } from 'src/service/bookingservice';
import { ProviderBooking } from 'src/service/providerBooking';
import { Thongtinve } from 'src/service/thongtinve';
import { booking, HanhKhach, RootObject } from '../../../service/modelBooking';

@Component({
  selector: 'app-payticket',
  templateUrl: 'payticket.html',
  styleUrls: ['payticket.scss'],
})
export class PayTicketPage {
  [x: string]: any;
    public time;
    public chonghe:any = [];
    private Thongtinkhachhang: RootObject = new RootObject();
    private thongtinve: booking = new booking();
    private hanhkhach: HanhKhach = new HanhKhach();
    submitted = false;
    public loaive = "Một chiều";
    public slve:any = "";
    public sotien = "";
    public thanhtien = "";
    public trangthai = "";
    public doituong:any;
  constructor(private router: Router,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private NavCtr: NavController,
    private bookingService : BookingService,
    private _booking : Thongtinve
    ) {

      if(this._providerBooking.loaive == "1"){
        this.loaive = " khứ hồi";  
      }else{
        this.loaive = "Một chiều";
      }
      
      this.slve = this._providerBooking.slve;
      this.sotien = this._providerBooking.tongTien;
       this.doituong = this._providerBooking.doituongs[0].tenPTOnline
    }
    
  Booking(){
    this.Thongtinkhachhang.HanhKhachs = this._providerBooking.hanhkhach;
    if(this._providerBooking.doiTuong2){
      this.Thongtinkhachhang.HanhKhachs = [this._providerBooking.hanhkhach , this._providerBooking.hanhkhachhai];
    }
    if(this._providerBooking.doiTuong3){
      this.Thongtinkhachhang.HanhKhachs = [this._providerBooking.hanhkhach , this._providerBooking.hanhkhachhai, this._providerBooking.hanhkhachba];
    }
    if(this._providerBooking.doiTuong4){
      this.Thongtinkhachhang.HanhKhachs = [this._providerBooking.hanhkhach , this._providerBooking.hanhkhachhai, this._providerBooking.hanhkhachtu];
    }
    this.Thongtinkhachhang.BookingPerson = this._providerBooking.bookingPerson;

    this.thongtinve.doiTuong = this.doituong;
    this.thongtinve.hoTen = this._providerBooking.hanhkhach.HoTen;
    this.thongtinve.soGiayto =  this._providerBooking.hanhkhach.SoGiayTo;
    this.thongtinve.gaDen = this._providerBooking.chontau.TenGaDen;
    this.thongtinve.gaDi = this._providerBooking.chontau.TenGaDi;
    this.thongtinve.ngay = this._providerBooking.chontau.Ngay;
    this.thongtinve.thanhTien = this.thanhtien
    this.thongtinve.trangThai = this.trangthai
    this.thongtinve.soLuong = this.slve
    this.thongtinve.loaiVe = this.loaive

    this.bookingService.create(this.Thongtinkhachhang).then(()=>{
      console.log("Đặt thành công!");
    })
    // console.log(this.Thongtinkhachhang);
    this._booking.created(this.thongtinve).then(()=>{
      console.log("Đặt thành công!");
   })
  }
  goback() {
    this.NavCtr.back();
  }
}
