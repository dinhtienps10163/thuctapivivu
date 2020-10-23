import { EventEmitter, Injectable} from '@angular/core';
import { listGaBacNam, listNhomCho, listDoiTuongKH, } from './model';


@Injectable({ providedIn: 'root'})
export class UserProvider {
    itemGaChange = new EventEmitter();
    ischeck: boolean = true;
    listGaBacNam: listGaBacNam;
    listGaBacNamden: listGaBacNam;
    listNhomCho: listNhomCho;
    listDoiTuongKH: listDoiTuongKH;
    listAmountKH: listDoiTuongKH;
    titlego;
    titleCome;
    nhonChoselected:any;
    gaBacNamSelected;
    gaBacNamSelectedcome;
    
    maGaDi;
    maGaDen;
    ngayDi;
    loaiCho;
    // constructor() {

    // }
   
}
