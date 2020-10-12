import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { service } from '../../../../service/service';
import { listGaBacNam } from '../../../../service/model';
import { UserProvider } from 'src/service/ultility';

@Component({
  selector: 'app-searchcomedetail',
  templateUrl: 'searchcomedetail.page.html',
  styleUrls: ['searchcomedetail.page.scss'],
})
export class SearchComeDetailPage {
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
    this._userProvider.listGaBacNamden = GaBacNam;
    this._userProvider.itemGaChange.emit(1);
    //this.router.navigate(['main/home'])
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
