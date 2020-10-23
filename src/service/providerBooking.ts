import { EventEmitter, Injectable} from '@angular/core';
import { listGaBacNam, listNhomCho, listDoiTuongKH, } from './model';


@Injectable({ providedIn: 'root'})
export class ProviderBooking {
    itemChange = new EventEmitter();
    maGaDi;
    maGaDen;
    ngayDi;
    loaiCho;
    // constructor() {

    // }
   
}
