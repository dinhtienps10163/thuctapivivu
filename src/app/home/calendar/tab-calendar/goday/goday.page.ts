import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from '../../../../../service/ultility';
import * as moment from 'moment';

@Component({
  selector: 'app-goday',
  templateUrl: 'goday.page.html',
  styleUrls: ['goday.page.scss'],
})
export class GoDayPage {
  public title
  constructor(private NavCtr: NavController,private modalController: ModalController,
   private router: Router, public _userProvider: UserProvider) { }

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  markDisabled = (date: Date) => {
    var current = new Date();
    return date < current;
  };
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay,
    //locate: 'vi',
  };

  onCurrentDateChanged = (ev: Date) => {
    //console.log('Date: ' + ev);

  };
  onEventSelected(event) {
    console.log(event)

  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
    
    //console.log(title)

  }
  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
    this.title = ev.selectedTime;
    const start = moment(ev.selectedTime).format('dddd-DD/MM/YYYY');
    this._userProvider.titlego = start
    this._userProvider.itemGaChange.emit(1);
    //console.log(this.title)
    // this._userProvider.titlego = this.title
    // this._userProvider.itemGaChange.emit(1);
    // console.log(this.title)
    // //this.modalController.dismiss()
  }
  clickcheckbox(event) {
    //.log(event)
  }
  
}
