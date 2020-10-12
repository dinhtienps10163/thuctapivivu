import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from '../../../../../service/ultility';

@Component({
  selector: 'app-comeday',
  templateUrl: 'comeday.page.html',
  styleUrls: [ 'comeday.page.scss'],
})
export class ComeDayPage {
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
    //console.log(this.title)
    this._userProvider.titlecome = this.title
    this._userProvider.itemGaChange.emit(1);

  }
  clickcheckbox(event) {
    //.log(event)
  }
  click() {
    this._userProvider.titlecome = this.title
    this._userProvider.itemGaChange.emit(1);
    console.log(this.title)
    this.router.navigate(['main/home'])
  }
  dismiss() {
    this.router.navigate(['main/home'])
  }

}
