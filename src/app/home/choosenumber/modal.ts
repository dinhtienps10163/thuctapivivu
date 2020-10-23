import { state } from '@angular/animations';
import { Component, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { sum } from 'angular-pipes/utils/utils';
import { listGaBacNam, listDoiTuongKH } from '../../../service/model';
import { service } from '../../../service/service';
import { UserProvider } from '../../../service/ultility';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
  styleUrls: ['modal.scss'],
})
export class ModalPage {
  public listDoiTuongKH: listDoiTuongKH[]
 // public amount = 0;
  public tenPTOnline;
  public amount;
  isDisableleft: boolean = true
  isDisableright: boolean = false
  constructor(private zone: NgZone , private modalController: ModalController, private _service: service,
    public _userProvider: UserProvider) { 
    }

  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        
        this.listDoiTuongKH = data.listDoiTuongKH;
        //console.log(this.listDoiTuongKH)
      })

      this._userProvider.itemGaChange.pipe().subscribe((data) => {
        if (data) {
          this.tenPTOnline = this._userProvider.listDoiTuongKH;
        }
      })
  }
  clickitem() {
    this.modalController.dismiss();
     this._userProvider.listDoiTuongKH = this.tenPTOnline
    //this._userProvider.listDoiTuongKH = this.amount
    this._userProvider.itemGaChange.emit(1);
  }
  dismiss() {
    this.modalController.dismiss()
  }
  clickplus(item) {
    this.tenPTOnline = item.tenPTOnline
      //item.amount = null
      for (let item = 0; item < this.listDoiTuongKH.length; item++) {
        const element = this.listDoiTuongKH[item];
        console.log(element.amount)
        if(element.amount == 4){
          
          return;
        }
      }
      if(item.amount.length == 4){
        return;
      }
    this.zone.run(() => {
      item.amount ++
    })
    this._userProvider.listDoiTuongKH = this.tenPTOnline;
    this.amount = item.amount;

    this._userProvider.listAmountKH = this.amount;
    item.amount = this._userProvider.listAmountKH;
    this._userProvider.itemGaChange.emit(1);

    if (item.amount == 4) {
      this.isDisableright = true
      //this.isDisableleft = false
    }
    else if (item.amount == 1) {
      this.isDisableleft = false
    }
    else {
      this.isDisableright = false
    }
    //console.log(item.lenght)

    //console.log(this.tenPTOnline)
    //console.log(this.amount)
  }
  clickminus(item) {
    this.tenPTOnline = item.tenPTOnline
    //item.amount = null
  this.zone.run(() => {
    item.amount --
  })
  this._userProvider.listDoiTuongKH = this.tenPTOnline;
  this.amount = item.amount;
  this._userProvider.itemGaChange.emit(1);

  this._userProvider.listAmountKH = this.amount;
  item.amount = this._userProvider.listAmountKH;

    if (item.amount == 0) {
      this.isDisableleft = true
      //this.isDisableright = false
    }
    else if (item.amount == 3) {
      this.isDisableright = false
    }
    else {
      this.isDisableleft = false
    }
  }
}