import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { booking, RootObject } from './modelBooking';


@Injectable({
    providedIn: 'root'
})
export class BookingService{
    private dbBooking ='/ThongTinHangKhach';
    
  BookingRef: AngularFireList<RootObject> = null;

  constructor(db: AngularFireDatabase)
  {
    this.BookingRef = db.list(this.dbBooking);
  }
  getAll(): AngularFireList<RootObject> {
    return this.BookingRef;
  }

  create(RootObject: RootObject): any {
    return this.BookingRef.push(RootObject);
  }
}
