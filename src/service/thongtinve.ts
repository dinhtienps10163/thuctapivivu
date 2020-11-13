import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { booking } from "./modelBooking";

@Injectable({
  providedIn: 'root'
})
export class Thongtinve{
    private dbBooking = '/ThongTinVe';
    BookingRef: AngularFireList<booking> = null;
  
    constructor(db: AngularFireDatabase){
      this.BookingRef = db.list(this.dbBooking);
    }
    getAll(): AngularFireList<booking> {
      return this.BookingRef;
    }
    created(booking: booking):any {
      return this.BookingRef.push(booking);
    }
  }