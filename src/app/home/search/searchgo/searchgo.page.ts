import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from 'src/service/ultility';
import { listGaBacNam, listLoaiCho } from '../../../../service/model';
import { service } from '../../../../service/service';

@Component({
  selector: 'app-searchgo',
  templateUrl: 'searchgo.page.html',
  styleUrls: ['searchgo.page.scss'],
})
export class SearchGoPage {
  
  // slideOpts = {
  //   initialSlide: 0,
  //   speed: 400,
  //   slidesPerView: 1.2,
  // };

  public listGaBacNam: listGaBacNam[] = [];
  public listLoaiCho: listLoaiCho[] = [];
  public GaBacNam;
  public MaGa;
  constructor(private router: Router, private modalController: ModalController, private NavCtr: NavController, private _service: service, public _userProvider: UserProvider,) { }
  ngOnInit() {
    this.getdata();
    
  }
  getdata() {
    this._service.getcomments().subscribe(
      data => {
        this.listGaBacNam = data.listGaBacNam;
        if(this._userProvider.gaBacNamSelected){
          this.listGaBacNam.forEach((item)=>{ item.selected = item.tenGa == this._userProvider.gaBacNamSelected.tenGa})
          this.selecteditem = this._userProvider.gaBacNamSelected;

          console.log(data.listLoaiCho)
        }
      });
      //nhận dữ liệu từ home.page
      this._userProvider.itemGaChange.pipe().subscribe((data) => {
        if (data) {
          this.selecteditem = this._userProvider.gaBacNamSelected
         // console.log("item selected : " + this.selecteditem)
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
    this._userProvider.gaBacNamSelected = this.selecteditem
    //console.log(GaBacNam)
    this.GaBacNam = GaBacNam.tenGa
    
    this.MaGa = GaBacNam.maGa
    this._userProvider.maGaDi = this.MaGa
    this._userProvider.listGaBacNam = this.GaBacNam;
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()
  }
  dismiss() {
    this.modalController.dismiss()
  }
}
