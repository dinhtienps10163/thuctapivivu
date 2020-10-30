import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cho, chonCho, ToaXe } from 'src/service/model';
import { toa } from 'src/service/modeltoa';
import { ProviderChooseSeat } from 'src/service/providerChooseSeat';

@Component({
  selector: 'app-chooseseat',
  templateUrl: 'chooseseat.page.html',
  styleUrls: ['chooseseat.page.scss'],
})
export class ChooseSeatPage {
  data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
  ]
    public dmTauId;
    public loaiCho;
    public toaSo;
    public toaNo;
    public slToiThieu;
    public khongLayGiaVe;
    public BookingCode;

    public chos: Cho;
    public chonCho: chonCho;
    public choNgoi = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };
  
  constructor(private http: HttpClient, private router: Router, private NavCtr : NavController, private _zone: NgZone,
    public _providerChooseSeat: ProviderChooseSeat,

    ) {
     this._zone.run(()=>{
      this._providerChooseSeat.itemChange.pipe().subscribe((data) => {
        if (data) {
          this.loaiCho = this._providerChooseSeat.loaiCho;
          console.log(this.loaiCho);
        }
      });

      this.http.get('./assets/datatimkiemcho.json').subscribe(
        data => {
          this.chonCho = data as chonCho;          
          this.chos = this.chonCho.Chos as Cho;
          console.log(this.chonCho.Chos);

          // this.choNgoi.push(this.chos);
          // let itemselected = this.choNgoi[0].filter((item) => { return item.LoaiCho == this._providerChooseSeat.loaiCho });
          // if (itemselected && itemselected.length > 0) {
          //   this.chos = itemselected;
          // } else {
          //   this.chos = null;
          // }
        },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        })
     })
    
  }
  showChoNgoi(){
    

  }

  clicktoa(item){
    console.log(item.id)
  }
  goback(){
    this.NavCtr.back();
  }

  onClick(){
    this.router.navigate(['informationticket'])
  }
}
// this.content.scrollToPoint(tọa độ x, tọa độ y, 200);