import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { listGaBacNam } from 'src/service/model';
import { service } from 'src/service/service';
import { UserProvider } from 'src/service/ultility';

@Component({
  selector: 'app-searchcome',
  templateUrl: 'searchcome.page.html',
  styleUrls: ['searchcome.page.scss'],
})
export class SearchComePage {

  public listGaBacNam: listGaBacNam[] = [];
  public GaBacNam;
  public maGa;
  constructor(private router: Router, private modalController: ModalController, private NavCtr: NavController, private _service: service, public _userProvider: UserProvider,) { }
  ngOnInit() {
    this.getdata();
    
  }
  getdata() {
    this._service.getcomments().subscribe(
      data => {
        this.listGaBacNam = data.listGaBacNam;
        if(this._userProvider.gaBacNamSelectedcome){
          this.listGaBacNam.forEach((item)=>{ item.selected = item.tenGa == this._userProvider.gaBacNamSelectedcome.tenGa})
          this.selecteditem = this._userProvider.gaBacNamSelectedcome;
        }
      });
      //nhận dữ liệu từ home.page
      this._userProvider.itemGaChange.pipe().subscribe((data) => {
        if (data) {
          this.selecteditem = this._userProvider.gaBacNamSelectedcome
          //console.log("item selected : " + this.selecteditem)
        }
      })
  }
  search(event: any) {
    //console.log(event)

    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.listGaBacNam = this.listGaBacNam.filter((GaBacNam) => {
        return (GaBacNam.tenGa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getdata();
    }
  }
  selecteditem: listGaBacNam
  clickitem(GaBacNam: listGaBacNam) {
    this.selecteditem = GaBacNam
    this._userProvider.gaBacNamSelectedcome = this.selecteditem
    //console.log(GaBacNam)
    this.GaBacNam = GaBacNam.tenGa
    this._userProvider.listGaBacNamden = this.GaBacNam;

    this.maGa = GaBacNam.maGa
    this._userProvider.maGaDen = this.maGa
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}