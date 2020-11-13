import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ChobyToa, ChoChinh, XinVe } from 'src/service/model';
import { ToaX } from 'src/service/modeltau';
import { ProviderBooking } from 'src/service/providerBooking';
import { UserProvider } from 'src/service/userprovider';

@Component({
  selector: 'app-chooseseat',
  templateUrl: 'chooseseat.page.html',
  styleUrls: ['chooseseat.page.scss'],
})
export class ChooseSeatPage implements OnInit {
  public isShow: boolean = false;
  public ngaydi;
  public chontau;
  public BookingCode;
  public toax;
  public GiaVe;
  public choChinh: ChoChinh;
  public chobytoa: ChobyToa;
  public chochinh = [];
  public chonghe = [];
  public sltoithieu;
  public xinVe: XinVe;
  public xinves = [];
  public Duration;
  constructor(private http: HttpClient, private router: Router, private NavCtr: NavController, private _zone: NgZone,
    public _userProvider: UserProvider,
    public _providerBooking: ProviderBooking,

  ) {

    this.http.get('./assets/datajson/datatimkiemcho.json').subscribe(
      data => {
        this.chobytoa = data as ChobyToa;
        this.choChinh = this.chobytoa.ChoChinhs as ChoChinh;

      },
      (err: HttpErrorResponse) => {
        console.log(err.message)
      });
      
  }

  ngOnInit() {
    this.ngaydi = this._userProvider.titleCome;
    this.chontau = this._providerBooking.chontau
    //this.khongLayGiaVe = this._providerChooseSeat.khongLayGiaVe;
    this.BookingCode = this._providerBooking.BookingCode;
    this.toax = this._providerBooking.chontau.ToaXes;
    this.sltoithieu = this._providerBooking.sltoithieu;
   
  }
  clickitem(item: ChoChinh) {
    setTimeout(() => {
      console.log("hết thời gian giữ vé");
      //this.router.navigate(['choosetrip'])
    }, 6000);
    for (let index = 0; index < this.chonghe.length; index++) {
      if(this.chonghe[index] == item){
        console.log("đã chọn");
        
      }
    }
      if(this.chonghe.length && this.chonghe.length >= this._providerBooking.sltoithieu + 1){
        console.log('tối đa');
      }else{
        this.chonghe.push(item);
      }
      this._providerBooking.slve = this.chonghe.length;
    this.GiaVe = item.GiaVe * this.chonghe.length * 1000;
    this._providerBooking.itemChange.emit(1);
    
    
   }
  
  clicktoa(item) {
    this.isShow = true
    this.chochinh.push(this.choChinh);
    let itemselected = this.chochinh[0].filter((items) => { return items.ToaSo == item.ToaSo && items.DMToaXeVatLyId == item.Id });
    if (itemselected && itemselected.length > 0) {
      this.choChinh = itemselected;
    } else {
      this.choChinh = null;
    }
  
  

  }
  goback() {
    this.NavCtr.back();
  }

  onClick() {
    this._providerBooking.chonghe = this.chonghe;
    this.router.navigate(['informationticket'])
  }
  
}
