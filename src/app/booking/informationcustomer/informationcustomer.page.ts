import { NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { ChoChinh } from 'src/service/model';
import { HanhKhach } from 'src/service/modelBooking';
import { BookingPerson } from 'src/service/modelkhachhang';
import { ProviderBooking } from 'src/service/providerBooking';
//import { Firebase } from '@ionic-native/firebase/ngx';
//import * as firebase from 'firebase/app';
//import { firebaseConfig } from './firebaseconfig';
@Component({
  selector: 'app-informationcustomer',
  templateUrl: 'informationcustomer.page.html',
  styleUrls: ['informationcustomer.page.scss'],
})
export class InformationCustomerPage {
  isCheck: boolean = false;
  
  isHiddena: boolean = false;
  isHiddend: boolean = true;
  isHiddenb: boolean = true;
  isHiddenc: boolean = true;
  public nguoithunhat;
  public nguoithuhai;
  public nguoithuba;
  public nguoithutu;

  isShow: boolean;
  isShowb: boolean;
  //thông tin khách hàng

  public hTen = "";
  public hCMND = "";
  public bTen = "";
  public bCMND = "";
  public tTen = "";
  public tCMND = "";
  //thông tin người đặt
  public doituong = [];
  hanhkhach: HanhKhach = new HanhKhach();
  hanhkhachhai: HanhKhach = new HanhKhach();
  hanhkhachba: HanhKhach = new HanhKhach();
  hanhkhachtu: HanhKhach = new HanhKhach();
  bookingPerson: BookingPerson = new BookingPerson(); 
  public name = "";
  public phone = "";
  public email = "";
  public CMND = "";
  // lấy hóa đơn điện tử
  public nameCty="";
  public maThue="";
  public address="";
  //firebase;
  public chonghe:any = ChoChinh;
  public chonghehai:any = ChoChinh;
  public chongheba:any = ChoChinh;
  public chonghetu:any =  ChoChinh;
  public chontau;
  data:any[]=[];
  selectedVal:Number = 1;
  constructor(private router: Router, private NavCtr : NavController,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private platform: Platform
    ) {
      this.platform.ready().then(()=>{
        this.data = [{id:1, name: "Người lớn"},
        {id:2, name: "Sinh viên"}, 
        {id: 3, name: "Người lớn tuổi (từ 60 tuổi)"}]
      })
      this._zone.run(() => {

          this.chonghe = this._providerBooking.chonghe[0];
          this.chonghehai = this._providerBooking.chonghe[1];
          this.chongheba = this._providerBooking.chonghe[2];
          this.chonghetu = this._providerBooking.chonghe[3];
 
    })
      this.chontau = this._providerBooking.chontau;
      
    
  }
  ngOnInit() {
    this.doituong = this._providerBooking.doituongs
    
    if(this.doituong.length > 1){
      this.isShow = false;
      this.isShowb = true;

      this.nguoithunhat = this._providerBooking.doituongs[0];
      this.nguoithuhai = this._providerBooking.doituongs[1];
      this.nguoithuba = this._providerBooking.doituongs[2];
      this.nguoithutu = this._providerBooking.doituongs[3];
      this._providerBooking.doiTuong = this.nguoithunhat.tenPTOnline;
      if(this.nguoithuhai){
      this._providerBooking.doiTuong2 = this.nguoithuhai.tenPTOnline;
      }
      if(this.nguoithuba){
     this._providerBooking.doiTuong3 = this.nguoithuba.tenPTOnline;
      }
      if(this.nguoithutu){
     this._providerBooking.doiTuong4 = this.nguoithutu.tenPTOnline;
    }

    }else if(this.doituong.length = 1){
      this.isShowb = false;
      this.isShow = true;

    }
    
  }
  goback(){
    this.NavCtr.back();
  }
  onclick(){
    

//xin ve khach hang mot chieu
    this.hanhkhach.HoTen = this.name;
    this.hanhkhach.SoGiayTo = this.CMND;
    this.hanhkhach.BaoHiem = this.chonghe.BaoHiem;
    this.hanhkhach.DMChoVLId = this.chonghe.Id;
    this.hanhkhach.DMLoaiChoId = this.chonghe.DMLoaiChoId;
    this.hanhkhach.DMTauId = this.chontau.Id
    this.hanhkhach.DMTauVLId = this.chontau.DMTauVatLyId;
    this.hanhkhach.DMToaVLId = this.chonghe.DMToaXeVatLyId;
    this.hanhkhach.GaDenKM = this.chontau.GaDenKM;
    this.hanhkhach.GaDiKM = this.chontau.GaDiKM;
    this.hanhkhach.GiaVe = this.chonghe.GiaVe;
    //this.hanhkhach.GiamGiaPT = this.chonghe.GIamGiaPT
    this.hanhkhach.GiamGiaTG = this.chonghe.GiamGiaTG;
    //this.hanhkhach.IsVeChieuVe
    //this.hanhkhach.ListKhuyenMai
    this.hanhkhach.MaPT = this._providerBooking.maPT;
    this.hanhkhach.Ngay = this.chontau.Ngay;
   // this.hanhkhach.RefTicketID
    //this.hanhkhach.Signature
    this.hanhkhach.TicketId = this.chonghe.TicketId;
    this.hanhkhach.TienThu = this.chonghe.TienThu;

// hanh khach hai
if(this.nguoithuhai){
    this.hanhkhachhai.HoTen = this.hTen;
    this.hanhkhachhai.SoGiayTo = this.hCMND;
    this.hanhkhachhai.BaoHiem = this.chonghehai.BaoHiem;
    this.hanhkhachhai.DMChoVLId = this.chonghehai.Id;
    this.hanhkhachhai.DMLoaiChoId = this.chonghehai.DMLoaiChoId;
    this.hanhkhachhai.DMTauId = this.chontau.Id
    this.hanhkhachhai.DMTauVLId = this.chontau.DMTauVatLyId;
    this.hanhkhachhai.DMToaVLId = this.chonghehai.DMToaXeVatLyId;
    this.hanhkhachhai.GaDenKM = this.chontau.GaDenKM;
    this.hanhkhachhai.GaDiKM = this.chontau.GaDiKM;
    this.hanhkhachhai.GiaVe = this.chonghehai.GiaVe;
    //this.hanhkhachhai.GiamGiaPT = this.chonghehai.GIamGiaPT
    this.hanhkhachhai.GiamGiaTG = this.chonghehai.GiamGiaTG;
    //this.hanhkhachhai.IsVeChieuVe
    //this.hanhkhachhai.ListKhuyenMai
    this.hanhkhachhai.MaPT = this.nguoithuhai.maPT;
    this.hanhkhachhai.Ngay = this.chontau.Ngay;
   // this.hanhkhachhai.RefTicketID
    //this.hanhkhachhai.Signature
    this.hanhkhachhai.TicketId = this.chonghehai.TicketId;
    this.hanhkhachhai.TienThu = this.chonghehai.TienThu;
    this._providerBooking.itemChange.emit(1);
  }
  // hanh khach ba
if(this.nguoithuba){
  this.hanhkhachba.HoTen = this.bTen;
  this.hanhkhachba.SoGiayTo = this.bCMND;
  this.hanhkhachba.BaoHiem = this.chongheba.BaoHiem;
  this.hanhkhachba.DMChoVLId = this.chongheba.Id;
  this.hanhkhachba.DMLoaiChoId = this.chongheba.DMLoaiChoId;
  this.hanhkhachba.DMTauId = this.chontau.Id
  this.hanhkhachba.DMTauVLId = this.chontau.DMTauVatLyId;
  this.hanhkhachba.DMToaVLId = this.chongheba.DMToaXeVatLyId;
  this.hanhkhachba.GaDenKM = this.chontau.GaDenKM;
  this.hanhkhachba.GaDiKM = this.chontau.GaDiKM;
  this.hanhkhachba.GiaVe = this.chongheba.GiaVe;
  //this.hanhkhachba.GiamGiaPT = this.chongheba.GIamGiaPT
  this.hanhkhachba.GiamGiaTG = this.chongheba.GiamGiaTG;
  //this.hanhkhachba.IsVeChieuVe
  //this.hanhkhachba.ListKhuyenMai
  this.hanhkhachba.MaPT = this.nguoithuba.maPT;
  this.hanhkhachba.Ngay = this.chontau.Ngay;
 // this.hanhkhachba.RefTicketID
  //this.hanhkhachba.Signature
  this.hanhkhachba.TicketId = this.chongheba.TicketId;
  this.hanhkhachba.TienThu = this.chongheba.TienThu;
  this._providerBooking.itemChange.emit(1);

}
// hanh khach bon
if(this.nguoithutu){
  this.hanhkhachtu.HoTen = this.tTen;
  this.hanhkhachtu.SoGiayTo = this.tCMND;
  this.hanhkhachtu.BaoHiem = this.chonghetu.BaoHiem;
  this.hanhkhachtu.DMChoVLId = this.chonghetu.Id;
  this.hanhkhachtu.DMLoaiChoId = this.chonghetu.DMLoaiChoId;
  this.hanhkhachtu.DMTauId = this.chontau.Id
  this.hanhkhachtu.DMTauVLId = this.chontau.DMTauVatLyId;
  this.hanhkhachtu.DMToaVLId = this.chonghetu.DMToaXeVatLyId;
  this.hanhkhachtu.GaDenKM = this.chontau.GaDenKM;
  this.hanhkhachtu.GaDiKM = this.chontau.GaDiKM;
  this.hanhkhachtu.GiaVe = this.chonghetu.GiaVe;
  //this.hanhkhachtu.GiamGiaPT = this.chonghetu.GIamGiaPT
  this.hanhkhachtu.GiamGiaTG = this.chonghetu.GiamGiaTG;
  //this.hanhkhachtu.IsVeChieuVe
  //this.hanhkhachtu.ListKhuyenMai
  this.hanhkhachtu.MaPT = this.nguoithutu.maPT;
  this.hanhkhachtu.Ngay = this.chontau.Ngay;
 // this.hanhkhachtu.RefTicketID
  //this.hanhkhachtu.Signature
  this.hanhkhachtu.TicketId = this.chonghetu.TicketId;
  this.hanhkhachtu.TienThu = this.chonghetu.TienThu;
      this._providerBooking.itemChange.emit(1);

}
// thông tin người đặt vé
    this.bookingPerson.BookingCode = this._providerBooking.BookingCode;
    this.bookingPerson.HoTen = this.name;
    this.bookingPerson.SoGiayTo = this.CMND;
    this.bookingPerson.Email = this.email;
    this.bookingPerson.Mobile = this.phone;
    this.bookingPerson.CongTy = this.nameCty;
    this.bookingPerson.DiaChi = this.address;
    this.bookingPerson.MST = this.maThue;
    // this.bookingPerson.MaKH
    // this.bookingPerson.AdultTicketID
    // this.bookingPerson.ReturnAdultTicketID
    this._providerBooking.hanhkhach = this.hanhkhach;
    this._providerBooking.hanhkhachhai = this.hanhkhachhai;
    this._providerBooking.hanhkhachba = this.hanhkhachba;
    this._providerBooking.hanhkhachtu = this.hanhkhachtu;
    this._providerBooking.bookingPerson = this.bookingPerson;


    this._providerBooking.itemChange.emit(1);
    this.router.navigate(['informationbooking']);
  }
  onSelect(ev){
    this._providerBooking.doiTuong = ev.target.value;
  }
  onClicknguoithunhat(){

    this.isHiddena = false;
    this.isHiddenb = true;
    this.isHiddenc = true;
    this.isHiddend = true;
  }
  onClicknguoithuhai(){
    this.isHiddena = true;
    this.isHiddenb = false;
    this.isHiddenc = true;
    this.isHiddend = true;
    
  }
  onClicknguoithuba(){
    this.isHiddena = true;
    this.isHiddenb = true;
    this.isHiddenc = false;
    this.isHiddend = true;
    
  }
  onClicknguoithutu(){
    this.isHiddena = true;
    this.isHiddenb = true;
    this.isHiddenc = true;
    this.isHiddend = false;
    
  }

 
}
