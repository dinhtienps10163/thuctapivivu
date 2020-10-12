import { Component } from '@angular/core';
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
  public amount = 0;
  isDisableleft: boolean = true
  isDisableright: boolean = false
  constructor(private modalController: ModalController, private _service: service,
    public _userProvider: UserProvider) { }

  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        this.listDoiTuongKH = data.listDoiTuongKH;
        console.log(this.listDoiTuongKH)
      })

  }
  clickitem() {
    this.modalController.dismiss();
    this._userProvider.listDoiTuongKH = this.amount;
    this._userProvider.itemGaChange.emit(1);
  }
  dismiss() {
    this.modalController.dismiss()
  }
  clickplus() {
    this.amount++
    if (this.amount == 4) {
      this.isDisableright = true
      //this.isDisableleft = false
    }
    else if (this.amount == 1) {
      this.isDisableleft = false
    }
    else {
      this.isDisableright = false
    }
    console.log(this.isDisableright)
  }
  clickminus() {
    this.amount--
    if (this.amount == 0) {
      this.isDisableleft = true
      //this.isDisableright = false
    }
    else if (this.amount == 3) {
      this.isDisableright = false
    }
    else {
      this.isDisableleft = false
    }
  }
}