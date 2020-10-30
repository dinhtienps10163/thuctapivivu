import { Component, EventEmitter, Injectable, Input, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { listNhomCho, ListTau, RootObject, ToaX } from 'src/service/model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserProvider } from 'src/service/ultility';
import { ProviderBooking } from 'src/service/providerBooking';
import { ProviderChooseSeat } from 'src/service/providerChooseSeat';

@Component({
  selector: 'app-choosetrip',
  templateUrl: 'choosetrip.page.html',
  styleUrls: ['choosetrip.page.scss'],
})


export class ChooseTripPage implements OnInit {
  // @Input() item: listNhomCho;
  // @Output() dathangEvent = new EventEmitter<listNhomCho>()

  public isdisabled: boolean = true
  public rootObject: RootObject;
  public listTau: ListTau;
  public toaXes: ToaX;
  public listTaus = [];
  public itemlistTau = [];

  public dayGo;
  public dayCome;
  public gaGo;
  public gaCome;
  public LoaiCho;
  
  constructor(private http: HttpClient,
    private router: Router, private NavCtr: NavController,
    public _providerBooking: ProviderBooking,
    public _userProvider: UserProvider,
    public _providerChooseSeat: ProviderChooseSeat,
    private _zone: NgZone) {
    //console.log(_providerBooking)
    this._zone.run(()=>{
      this.dayGo = this._providerBooking.dayGo;
      this.gaCome = this._providerBooking.gaCome;
      this.gaGo = this._providerBooking.gaGo;

      this.http.get('./assets/datatimkiemtau.json').subscribe(
        data => {
          this.rootObject = data as RootObject;
          this.listTau = this.rootObject.listTau as ListTau;
          this.listTaus.push(this.listTau);
          let itemselected = this.listTaus[0].filter((item) => { return item.maGaDi == this._providerBooking.maGaDi && item.maGaDen == this._providerBooking.maGaDen && item.toaXes[0].nhomChoWeb == this._providerBooking.loaiCho });
          if (itemselected && itemselected.length > 0) {
            this.listTau = itemselected;
          } else {
            this.listTau = null;
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
    let bookingCode = Math.random().toString(15).substring(10);
    console.log("random", bookingCode);
    // this.ProviderChooseSeat.dmTauId = this.listTau;
    this.LoaiCho = item.toaXes[0].listLoaiCho;
    this._providerChooseSeat.toaSo = item.toaXes[0].toaSo;
    this._providerChooseSeat.toaNo = item.toaXes[0].toaNo;
    // this._providerChooseSeat.slToiThieu = this.listTau;
    // this._providerChooseSeat.khongLayGiaVe = this.listTau;
    this._providerChooseSeat.BookingCode = bookingCode;
    this._providerChooseSeat.itemChange.emit(1);
    console.log(this._providerChooseSeat);
    
    
  }
  clickbutton() {
    this.router.navigate(['chooseseat'])
    // this.ProviderChooseSeat.dmTauId = this.listTau;
    this._providerChooseSeat.loaiCho = this.LoaiCho;    
    // this._providerChooseSeat.toaSo = this.listTau;
    // this._providerChooseSeat.toaNo = this.listTau;
    // this._providerChooseSeat.slToiThieu = this.listTau;
    // this._providerChooseSeat.khongLayGiaVe = this.listTau;
    // this._providerChooseSeat.BookingCode = this.listTau;
    this._providerChooseSeat.itemChange.emit(1);
    //console.log(this._providerChooseSeat.loaiCho);
  }
}
