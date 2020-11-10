import { Component, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Doituongkhachhang } from 'src/service/modelBooking';
import { ProviderBooking } from 'src/service/providerBooking';
import { listDoiTuongKH } from '../../../service/modeldanhmuc';
import { service } from '../../../service/service';
import { UserProvider } from '../../../service/userprovider';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
  styleUrls: ['modal.scss'],
})
export class ModalPage {
  public listDoiTuongKH: listDoiTuongKH[]
  public tenPTOnline;
  public sl;
  public doituong: any = [];
  isDisableleft: boolean = true
  isDisableright: boolean = false
  data: Doituongkhachhang[] = [];
  constructor(
    private zone: NgZone,
    private modalController: ModalController,
    private _service: service,
    public _userProvider: UserProvider,
    public _providerBooking: ProviderBooking) { }

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
  confirm() {
    this.modalController.dismiss();
    this._providerBooking.sltoithieu = this.sl;
    this._providerBooking.doituongs = this.data
  }
  dismiss() {
    this.modalController.dismiss()
  }
  clickplus(item) {
    var listarr = this.listDoiTuongKH.map((item) => { return item.amount })
    let count = listarr.reduce((c, total: any) => { return total += c });
    this.sl = count;
    if (item.amount > 0 && item.amount < 2) {
      this.data.push(item.tenPTOnline)
    }else if (item.amount > 2 && item.amount < 4) {
      this.data.push(item.tenPTOnline)
    }else if (item.amount > 1 && item.amount < 3) {
      this.data.push(item.tenPTOnline)
    }else if(item.amount < 1){
      this.data.push(item.tenPTOnline)
    };
        //this.tenPTOnline = item.tenPTOnline
    this.zone.run(() => {
      item.amount++
    });
    if (listarr) {
      var listname = this.listDoiTuongKH.map((item) => { return item.amount > 0 ? (" " + item.amount + " " + item.tenPTOnline) : '' })
      this.tenPTOnline = listname
      this._userProvider.listDoiTuongKH = this.tenPTOnline;
      this._userProvider.itemGaChange.emit(1);
    };

    if (count == 4) {
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

    var listarr = this.listDoiTuongKH.map((item) => { return item.amount })
    let count = listarr.reduce((c, total: any) => { return total += c });
    this.sl = count;
    if (item.amount > 0 && item.amount < 2) {
      this.data.push(item.tenPTOnline)
    }else if (item.amount > 2 && item.amount < 4) {
      this.data.push(item.tenPTOnline)
    }else if (item.amount > 1 && item.amount < 3) {
      this.data.push(item.tenPTOnline)
    }else if(item.amount < 1){
      this.data.push(item.tenPTOnline)
    };
    this.zone.run(() => {
      item.amount--
    });
    if (listarr) {
      var listname = this.listDoiTuongKH.map((item) => { return item.amount > 0 ? (" " + item.amount + " " + item.tenPTOnline) : '' })
      this.tenPTOnline = listname
      this._userProvider.listDoiTuongKH = this.tenPTOnline;
      this._userProvider.itemGaChange.emit(1);
    };

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