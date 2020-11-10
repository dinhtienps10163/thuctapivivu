import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Doituong, Information } from 'src/service/model';
import { Thongtinkhachhang } from 'src/service/modelBooking';
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
  
  public nameCty;
  public maThue;
  public address;

  isHidden: boolean = false;
 

  isShow: boolean;
  isShowb: boolean;
  public information:Information;
  public thongtinkhachhang:any[] = [];
  public ten;
  public socmnd;
  //thông tin người đặt
  public doiTuong=[];
  public name;
  public phone;
  public email;
  public CMND;

  //firebase;
 // firebase.initializeApp(firebaseConfig);
  data:any[]=[];
  selectedVal:Number = 1;
  constructor(private router: Router, private NavCtr : NavController,
    public _providerBooking: ProviderBooking,
    private platform: Platform
    ) {
      this.platform.ready().then(()=>{
        this.data = [{id:1, name: "Người lớn"},
        {id:2, name: "Sinh viên"}, 
        {id: 3, name: "Người lớn tuổi (từ 60 tuổi)"}]
      })
  }
  ngOnInit() {
    this.doiTuong = this._providerBooking.doituongs
    if(this.doiTuong.length > 1){
      this.isShow = false;
      this.isShowb = true;
    }else if(this.doiTuong.length = 1){
      this.isShowb = false;
      this.isShow = true;
    }
  }
  goback(){
    this.NavCtr.back();
  }
  onclick(){
    this._providerBooking.name = this.name;
    this._providerBooking.phone = this.phone;
    this._providerBooking.email = this.email;
    this._providerBooking.cmnd = this.CMND

    this.thongtinkhachhang.push(this.doiTuong, this.ten, this.socmnd)
    this._providerBooking.thongtinkhachhang = this.thongtinkhachhang;
    this._providerBooking.itemChange.emit(1);
    this.router.navigate(['informationbooking']);
    console.log(this._providerBooking);
    console.log(this.thongtinkhachhang);
    
    
  }
  onSelect(ev){
    this._providerBooking.doiTuong = ev.target.value;
  }
  onClickNguoiLon(item){
    //if(item){
    //this.isHidden = true;
    //}
    //console.log(item);
    
  }
 
}
