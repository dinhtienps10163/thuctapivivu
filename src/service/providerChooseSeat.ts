import { EventEmitter, Injectable} from '@angular/core';
import { listGaBacNam, listNhomCho, listDoiTuongKH, } from './model';


@Injectable({ providedIn: 'root'})
export class ProviderChooseSeat {
    itemChange = new EventEmitter();
    dmTauId;
    loaiCho;
    toaSo;
    toaNo;
    slToiThieu;
    khongLayGiaVe;
    BookingCode;
    // constructor() {

    // }
   
}
