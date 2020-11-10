import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ChobyToa, ChoChinh } from 'src/service/model';
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
  public isDisable: boolean = false;
  public ngaydi;
  public chontau;
  public BookingCode;
  public toax;
  public choChinh: ChoChinh;
  public chobytoa: ChobyToa;
  public chochinh = [];
  chonghe = [];
  public giaVe
  public sltoithieu;

  constructor(private http: HttpClient, private router: Router, private NavCtr: NavController, private _zone: NgZone,
    public _userProvider: UserProvider,
    public _providerBooking: ProviderBooking,

  ) {
    //console.log(this._providerBooking);

    this.http.get('./assets/datatimkiemcho.json').subscribe(
      data => {
        this.chobytoa = data as ChobyToa;
        this.choChinh = this.chobytoa.ChoChinhs as ChoChinh;
       // console.log(this.chobytoa);

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
    //console.log(this.chontau);
   
  }
  clickitem(item: ChoChinh) {
 
    //console.log(item);
    this.giaVe = item.GiaVe
    this._providerBooking.thuTien = this._providerBooking.tongTien = this._providerBooking.thanhTien = item.TienThu;
    this._providerBooking.phiBaoHiem = item.BaoHiem;
    this.chonghe.push(item);
    this._providerBooking.itemChange.emit(1);
    if(this.chonghe.length && this.chonghe.length >= this._providerBooking.sltoithieu + 1){
      console.log('tối đa');
      
    }
  }
  
  clicktoa(item) {
    this.isShow = true
    //console.log(item)
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
    //console.log(this.chonghe);

    this.router.navigate(['informationticket'])
  }
}
// this.content.scrollToPoint(tọa độ x, tọa độ y, 200);
