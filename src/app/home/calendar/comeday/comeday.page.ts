import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import * as moment from 'moment';
import { UserProvider } from '../../../../service/userprovider';

@Component({
  selector: 'app-comeday',
  templateUrl: 'comeday.page.html',
  styleUrls: [ 'comeday.page.scss'],
})
export class ComeDayPage {
  public ischeck: boolean = false;
  public to;
  showEventDetail: boolean = false; 
  public froms;
  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
   optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
     // monthFormat: 'dddd-DD/MM/YYYY',

   };

  constructor(private NavCtr: NavController,private modalController: ModalController,
   private router: Router, public _userProvider: UserProvider) { }
   

  ngOnInit() {
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {
       this.to = this._userProvider.titleCome;
       this.froms = this._userProvider.titlego;
      }

    })
  }
  monthChange(ev){
    //console.log(ev)
  }
  onChange(event){
     this.to = moment(event.to).format('DD/MM/YYYY');
     this.froms = moment(event.from).format('DD/MM/YYYY');
    //console.log(event)
    
  }
  clickcheckbox(event) {
    if(this.ischeck == true){
      this.showEventDetail = true
    }else{
      this.showEventDetail = false
    }
    //console.log(this.showEventDetail)
    //console.log(event)
  }
  click() {
    this._userProvider.titleCome = this.to
    this._userProvider.titlego = this.froms
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()
    //console.log(this.to)
  }
  dismiss() {
    this.modalController.dismiss()
  }

}
