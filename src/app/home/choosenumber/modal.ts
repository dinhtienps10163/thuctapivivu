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
  public soluong;
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
    //this._userProvider.listDoiTuongKH = this.tenPTOnline
    //this._userProvider.listDoiTuongKH = this.amount
    //this._userProvider.itemGaChange.emit(1);
  }
  dismiss() {
    this.modalController.dismiss()
  }
  clickplus(item) {
    var listarr = this.listDoiTuongKH.map((item) => {return item.amount})
    let count = listarr.reduce((c, total:any) => {return total += c});
     // console.log(listname);
      
      
    this.zone.run(() => {
      item.amount ++
    })
    if(listarr){
      var listname = this.listDoiTuongKH.map((item) => {return item.amount > 0 ? (" " + item.amount + " " +item.tenPTOnline) : ''})
      this.tenPTOnline = listname
      this._userProvider.listDoiTuongKH = this.tenPTOnline;
      //this.amount = item.amount;
      //this._userProvider.listAmountKH = this.amount;
      //item.amount = this._userProvider.listAmountKH;
      this._userProvider.itemGaChange.emit(1);
    }
     
    if(count == 4){
      this.isDisableright = true
      return;
    }
    if (count == 3) {
      this.isDisableright = true
      //this.isDisableleft = false
    }
    else if (count == 1) {
      this.isDisableleft = false
    }
    else {
      this.isDisableright = false
    }

  }
  clickminus(item) {
    
    var listarr = this.listDoiTuongKH.map((item) => {return item.amount})
    let count = listarr.reduce((c, total:any) => {return total += c});
    //item.amount = null
  this.zone.run(() => {
    item.amount --
  })
  this.tenPTOnline = item.tenPTOnline
  this._userProvider.listDoiTuongKH = this.tenPTOnline;
  this.amount = item.amount;
  this._userProvider.listAmountKH = this.amount;
  this._userProvider.itemGaChange.emit(1);
  //item.amount = this._userProvider.listAmountKH;

    if (count == 0) {
      this.isDisableleft = true
      //this.isDisableright = false
    }
    else if (count == 4) {
      this.isDisableright = false
    }
    else {
      this.isDisableleft = false
    }
  }
}