import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { service } from './service';
import { list, listGaBacNam } from './model';
import { resolve } from 'url';

@Component({
  selector: 'app-danhmuc',
  templateUrl: 'danhmuc.page.html',
  styleUrls: ['danhmuc.page.scss'],
})
export class DanhMucPage {
  listGa: listGaBacNam[]
  data: [
      {
        "id": 1,
        "maGa": "AHO",
        "tenGa": "An Hòa",
        "sKeys": "a, ah, anhoa, an hoa, AHO, An Hòa, An Hoa"
      },
      {
        "id": 2,
        "maGa": "ATH",
        "tenGa": "Ấm Thượng",
        "sKeys": "ATH, Amthuong, Am thuong, Ấm Thượng, Am Thuong"
      },
      {
        "id": 3,
        "maGa": "BAS",
        "tenGa": "Bảo Sơn",
        "sKeys": "b, bas, baoson, bao son, BAS, Bảo Sơn, Bao Son"
      },
  ]
  constructor(private _service : service) {
  }
  lstcomments: list[];
  
 ngOnInit() {
   this._service.getcomments().subscribe(
     data =>{
       this.lstcomments = data;
       console.log(data)
       
     })
 }
 getDaTa(){
   list=>{
   this.listGa = list.listGaBacNam;
   console.log(list)
  }
 }
}