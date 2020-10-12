import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { listGaBacNam, listNhomCho } from '../../../service/model';
import { service } from '../../../service/service';
import { UserProvider } from '../../../service/ultility';

@Component({
  selector: 'app-choosechair',
  templateUrl: 'choosechair.page.html',
  styleUrls: ['choosechair.page.scss'],
})
export class ChooseChairPage {
  public listNhomCho: listNhomCho[] = [];
  constructor(private modalController: ModalController, private _service: service, 
    public _userProvider: UserProvider) { }


  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        this.listNhomCho = data.listNhomCho;
        console.log(this.listNhomCho)
      })
  }
  clickitem(nhomCho: listNhomCho) {
    console.log(nhomCho)
    this.modalController.dismiss()
    this._userProvider.listNhomCho = nhomCho;
    this._userProvider.itemGaChange.emit(1);
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
