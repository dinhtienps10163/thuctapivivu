import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { listGaBacNam, listDoiTuongKH, list } from '../../../../service/model';
import { service } from '../../../../service/service';
import { UserProvider } from '../../../../service/ultility';

@Component({
  selector: 'app-searchgodetail',
  templateUrl: 'searchgodetail.page.html',
  styleUrls: ['searchgodetail.page.scss'],
})
export class SearchGoDetailPage {
  public listGaBacNam: listGaBacNam[] = [];
  constructor(private router: Router, private modalController: ModalController, private NavCtr: NavController, private _service: service, public _userProvider: UserProvider,
  ) { }


  ngOnInit() {
    this._service.getcomments().subscribe(
      data => {
        this.listGaBacNam = data.listGaBacNam;
        console.log(this.listGaBacNam)
      })
  }
  search(event) {
    console.log(event)
    const val = event.detail.value;
    if (val && val.trim() !== '') {
      this.listGaBacNam = this.listGaBacNam.filter((GaBacNam) => {
        return (GaBacNam.tenGa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  clickitem(GaBacNam: listGaBacNam) {
    console.log(GaBacNam)
    this._userProvider.listGaBacNam = GaBacNam;
    this._userProvider.itemGaChange.emit(1);
    //this.router.navigate(['main/home'])
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
