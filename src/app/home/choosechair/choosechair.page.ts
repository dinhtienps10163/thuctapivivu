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
  public name;
  public code;
  public itemselected :any = {name: '',code: ''};
  constructor(private modalController: ModalController, private _service: service, 
    public _userProvider: UserProvider) { }
    

  ngOnInit(){
    //get api
    this._service.getcomments().subscribe(
      data => {
        this.listNhomCho = data.listNhomCho;
        //console.log(this.listNhomCho);
        if(this._userProvider.nhonChoselected){
          this.listNhomCho.forEach((item)=>{ item.selected = item.name == this._userProvider.nhonChoselected.name})
          this.selectedItem = this._userProvider.nhonChoselected;
        }
       
      })
      //nhận dữ liệu từ
      this._userProvider.itemGaChange.pipe().subscribe((data) => {
        if (data) {
          this.selectedItem = this._userProvider.nhonChoselected
          //console.log("item selected : " + this.selectedItem)
        }
      })
      // this.itemselected === this.selectedItem
  }
  selectedItem: listNhomCho;
  clickitem(nhomCho: listNhomCho){
    //console.log(nhomCho)
    //set selecteditem
    this.selectedItem = nhomCho
    //đẩy dữ liệu
    this.name = nhomCho.name;
    this._userProvider.listNhomCho = this.name;
    this._userProvider.nhonChoselected = this.selectedItem

    this.code = nhomCho.code
    this._userProvider.loaiCho = this.code
    this._userProvider.itemGaChange.emit(1);
    //đóng modal
    this.modalController.dismiss()
   // console.log(this.selectedItem)
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
