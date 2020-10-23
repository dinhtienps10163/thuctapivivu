import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { listNhomCho, ListTau, RootObject } from 'src/service/model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserProvider } from 'src/service/ultility';
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
  public rootObject: RootObject;
  public listTau: ListTau;
  public listTaus = [];
  
  public maGaDi;
  public maGaDen;
  public ngayDi;
  public loaiCho;
  constructor(private http: HttpClient,
    private router: Router, private NavCtr: NavController,
    public _providerBooking : ProviderBooking,
    public _userProvider: UserProvider) { 
      console.log(_providerBooking)
    }
  ngOnInit() {
    this._providerBooking.itemChange.pipe().subscribe((data) => {
      if (data) {
        console.log("data: "+ data);
        this.maGaDi = this._providerBooking.maGaDi;
        this.maGaDen = this._providerBooking.maGaDen;
        this.ngayDi = this._providerBooking.ngayDi;
        this.loaiCho = this._providerBooking.loaiCho;

      }
    })
    this.http.get('./assets/datatimkiemtau.json').subscribe(
      data => {
        this.rootObject = data as RootObject; 
        this.listTau = this.rootObject.listTau as ListTau;
        // console.log(this.rootObject.listTau)
        //console.log(this.listTau[0])
      },
      (err: HttpErrorResponse) => {
        console.log(err.message)
      })
  }
  showItem(){
   
  }
  goback() {
    this.NavCtr.back();
  }
  onClick() {
    this.isdisabled = false

  }
  clickbutton() {
    this.router.navigate(['chooseseat'])

  }
}
