import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UserProvider } from '../../../service/ultility';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage {
  public ischeck: boolean = false
  public title
  public titleCome
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

  ngOnInit() {
    // this.daygos = this._userProvider.titlego 
    // console.log(this.daygos)
    this._userProvider.itemGaChange.pipe().subscribe((data) => {
      if (data) {
        this.ischeck = this._userProvider.ischeck;
      }

    })
    
  }

  onCurrentDateChanged = (ev: Date) => {
    //console.log('Date: ' + ev);

  };
  onEventSelected(event) {
    console.log(event.startTime)

  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
    //console.log(title.startTime)

  }
  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
    this.title = ev.selectedTime;
    //console.log(ev)
  }
  clickcheckbox(event) {
    //.log(event)
  }
  click() {
    this._userProvider.titlego = this.title
    this._userProvider.titlecome = this.title

    this._userProvider.itemGaChange.emit(1);
    //console.log(this.titleCome)
    this.modalController.dismiss()

  }
  dismiss() {
    this.modalController.dismiss()
  }
  goDay(){

  }
  comeDay(){

  }
}
