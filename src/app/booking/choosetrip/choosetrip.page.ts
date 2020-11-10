import { Component, EventEmitter, Injectable, Input, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {  ListTau, RootObject, ToaX } from 'src/service/modeltau';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserProvider } from 'src/service/userprovider';
import { ProviderBooking } from 'src/service/providerBooking';

@Component({
  selector: 'app-choosetrip',
  templateUrl: 'choosetrip.page.html',
  styleUrls: ['choosetrip.page.scss'],
})


export class ChooseTripPage implements OnInit {
  // @Input() item: listNhomCho;
  // @Output() dathangEvent = new EventEmitter<listNhomCho>()

  public isdisabled: boolean = true
  public RootObject: RootObject;
  public ListTau: ListTau;
  public ToaXes: ToaX;
  public listTaus = [];
  public itemlistTau = [];

  public dayGo;
  //public dayCome;
  public gaGo;
  public gaCome;

  public dmTauId;
  public loaiCho;
  public toaSo;
  public toaNo;
  public slToiThieu;
  public khongLayGiaVe;
  public BookingCode;

  public ngaydi;
  public ngayden;
  public giodi;
  public gioden;
  public mactau;
  constructor(private http: HttpClient,
    private router: Router, private NavCtr: NavController,
    public _providerBooking: ProviderBooking,
    public _userProvider: UserProvider,
    //public _providerChooseSeat: ProviderChooseSeat,
    private _zone: NgZone) {
    //console.log(_providerBooking)
    this._zone.run(()=>{
      this.dayGo = this._providerBooking.dayGo;
      this.gaCome = this._providerBooking.gaCome;
      this.gaGo = this._providerBooking.gaGo;

      this.http.get('./assets/datatimkiemtau.json').subscribe(
        data => {
          this.RootObject = data as RootObject;
          this.ListTau = this.RootObject.ListTau as ListTau;
          this.ToaXes = this.ListTau[0].ToaXes as ToaX;

          this.listTaus.push(this.ListTau);
          let itemselected = this.listTaus[0].filter((item) => { return item.MaGaDi == this._providerBooking.maGaDi && item.MaGaDen == this._providerBooking.maGaDen && item.ToaXes[0].NhomChoWeb == this._providerBooking.loaiCho });
          if (itemselected && itemselected.length > 0) {
            this.ListTau = itemselected;
          } else {
            this.ListTau = null;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        })
    })
    
  }
  ngOnInit() {
   
    
  }
  showItem() {

  }
  goback() {
    this.NavCtr.back();
  }
  onClick(item) {
    this.isdisabled = false
    this._providerBooking.chontau = item
    this._providerBooking.BookingCode = this.RootObject.BookingCode;
    this._providerBooking.itemChange.emit(1);
   // console.log(this._providerBooking);
    console.log(item);
    
  }
  clickbutton() {
    this.router.navigate(['chooseseat'])
    this._providerBooking.itemChange.emit(1);
    //console.log(this._providerChooseSeat.loaiCho);
    
  }
}
