import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from 'src/service/ultility';
import { listGaBacNam } from '../../../../service/model';
import { service } from '../../../../service/service';
import { SearchGoDetailPage } from '../searchgodetail/searchgodetail.page';

@Component({
  selector: 'app-searchgo',
  templateUrl: 'searchgo.page.html',
  styleUrls: ['searchgo.page.scss'],
})
export class SearchGoPage {


  public listGaBacNam: listGaBacNam[] = [];
  public GaBacNam;
  constructor(private router: Router, private modalController: ModalController, private NavCtr: NavController, private _service: service,public _userProvider: UserProvider,) { }
  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        this.listGaBacNam = data.listGaBacNam;
        console.log(listGaBacNam)
      })
  }
  async _openModalSearchGoDetail() {
    const modal = await this.modalController.create({
      component: SearchGoDetailPage,
      cssClass: 'my-modal-component-cssss'
    })
    await modal.present();
    // const event: any = modal.onDidDismiss();
    // console.log(event);
    // this.khachHang = this._userProvider.listDoiTuongKH;
    //   console.log(this.khachHang)
  }
  clickitem(GaBacNam: listGaBacNam) {
    console.log(GaBacNam)
    this._userProvider.listGaBacNam = GaBacNam;
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
