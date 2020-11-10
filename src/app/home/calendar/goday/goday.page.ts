import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from '../../../../service/userprovider';
import * as moment from 'moment';
import { CalendarComponentOptions, CalendarResult } from 'ion2-calendar';

@Component({
  selector: 'app-goday',
  templateUrl: 'goday.page.html',
  styleUrls: ['goday.page.scss'],
})
export class GoDayPage {
  public ischeckbox: boolean = false
  public from

  //public to
  showEventDetail: boolean = false;
  dateRange: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
 //  optionsRange: CalendarComponentOptions = {
 //    //pickMode: 'range',
 //    monthFormat: 'dddd-DD/MM/YYYY'
    
 //  };
  constructor(private NavCtr: NavController,private modalController: ModalController,
   private router: Router, public _userProvider: UserProvider) { }
  
   
  ngOnInit() {
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {
        this.from = this._userProvider.titlego
       // this.dateRange = this._userProvider.titlego
      }
    })
  }

  
  selectStart(ev){
   // console.log(ev)
  }
  monthChange(ev){
    //console.log(ev)
  }
  onChange(event){
    this.from = moment(event).format('DD/MM/YYYY');
  }
  clickcheckbox(event) {
    if(this.ischeckbox == true){
      this.showEventDetail = true
    }else{
      this.showEventDetail = false
    }
   // console.log(this.showEventDetail)
    //console.log(event)
  }
  click() {
    this._userProvider.titlego = this.from
    this._userProvider.itemGaChange.emit(1);
    this.modalController.dismiss()

  }
  dismiss() {
    this.modalController.dismiss()
  }

}
