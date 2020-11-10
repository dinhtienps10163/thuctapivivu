import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import ModelBooking from './modelBooking';


@Injectable({
    providedIn: 'root'
})
export class BookingService{
    private dbBooking ='/ModelBooking';
    
  BookingRef: AngularFireList<ModelBooking> = null;

  constructor(private db: AngularFireDatabase)
  {
    this.BookingRef = db.list(this.dbBooking);
  }
  getAll(): AngularFireList<ModelBooking> {
    return this.BookingRef;
  }

  create(modelBooking: ModelBooking): any {
    return this.BookingRef.push(modelBooking);
  }
}