import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { listGaBacNam } from 'src/service/model';
import { service } from 'src/service/service';
import { UserProvider } from 'src/service/ultility';
import { SearchComeDetailPage } from '../searchcomedetail/searchcomedetail.page';

@Component({
  selector: 'app-searchcome',
  templateUrl: 'searchcome.page.html',
  styleUrls: ['searchcome.page.scss'],
})
export class SearchComePage {

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
      component: SearchComeDetailPage,
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
    this._userProvider.listGaBacNamden = GaBacNam;
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
