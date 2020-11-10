import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BookingService } from 'src/service/bookingservice';
import { ProviderBooking } from 'src/service/providerBooking';
import ModelBooking from '../../../service/modelBooking';
@Component({
  selector: 'app-informationbooking',
  templateUrl: 'informationbooking.page.html',
  styleUrls: ['informationbooking.page.scss'],
})
export class InformationBookingPage {
  isCheck: boolean = false;
  public time;
  public chonghe:any = [];
  booking: ModelBooking = new ModelBooking();
  submitted = false;
  //data booking
  constructor(private router: Router,
    public _providerBooking: ProviderBooking,
    private _zone: NgZone,
    private NavCtr: NavController,
    private bookingService : BookingService,
    ) {

      this._zone.run(() => {

        this.booking.doiTuong = this._providerBooking.doiTuong;
        this.booking.chontau = this._providerBooking.chontau;
        this.booking.name = this._providerBooking.name;
        this.booking.cmnd = this._providerBooking.cmnd;
        this.booking.phiBaoHiem = this._providerBooking.phiBaoHiem;
        //this.booking.ghiChu = this._providerBooking.ghiChu;
        this.booking.BookingCode = this._providerBooking.BookingCode;
        this.booking.tienThu = this._providerBooking.thuTien;
        this.booking.tongTien = this._providerBooking.tongTien;
        this.booking.thanhTien = this._providerBooking.thanhTien;
        this.booking.phone = this._providerBooking.phone;
        this.booking.email = this._providerBooking.email;
        this.time = this._providerBooking.chontau.GioDi + " - " + this._providerBooking.chontau.GioDen;
        this.chonghe = this._providerBooking.chonghe;
        //this.choNgoi = "Ghế " + this.chonghe.ChoSo + " - Toa " + this.chonghe.ToaSo
      }
  )
      
  }
  ngOnInit() {
    
  }
  checked(ev){
    console.log(this.isCheck);
        
  }
  saveBooking(){
    setTimeout(() => {
      console.log("hết thời gian giữ vé");
    }, 3000);
    this.router.navigate(['payticket']);
    // this.bookingService.create(this.booking).then(()=>{
      
    //   this.submitted = true;
    // })
    //console.log(this.booking);
    
  }
  newBooking(): void{
    this.submitted = false;
    this.booking = new ModelBooking();
  }
  goback() {
    this.NavCtr.back();
  }
}
