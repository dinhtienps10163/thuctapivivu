import { Component, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
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
  isDisableleft: boolean = true
  isDisableright: boolean = false
  constructor(private zone: NgZone , private modalController: ModalController, private _service: service,
    public _userProvider: UserProvider) { 
      
    }

  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        
        this.listDoiTuongKH = data.listDoiTuongKH;
        console.log(this.listDoiTuongKH)
      })
      //this._userProvider.listDoiTuongKH.amount = this.amount
  }
  clickitem() {
    this.modalController.dismiss();
     this._userProvider.listDoiTuongKH = this.tenPTOnline
    // this._userProvider.amount = this.amount;
    this._userProvider.itemGaChange.emit(1);
  }
  dismiss() {
    this.modalController.dismiss()
  }
  clickplus(item) {
    this.tenPTOnline = item
      //item.amount = null
    this.zone.run(() => {
      item.amount ++
    })
    this._userProvider.listDoiTuongKH = this.tenPTOnline
    this._userProvider.listDoiTuongKH = item.amount;

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

    console.log(item)
  }
  clickminus(item) {
    this.tenPTOnline = item
    this.zone.run(() => {
      item.amount --
    })
    this._userProvider.listDoiTuongKH = this.tenPTOnline
    this._userProvider.listDoiTuongKH = item.amount;

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