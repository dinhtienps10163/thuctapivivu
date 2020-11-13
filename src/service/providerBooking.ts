import { EventEmitter, Injectable} from '@angular/core';
import { ChoChinh } from './model';
import { ListTau, RootObject, ToaX } from './modeltau';


@Injectable({ providedIn: 'root'})
export class ProviderBooking {
    itemChange = new EventEmitter();
    //chon chuyen
    maGaDi;
    maGaDen;
    loaiCho;
    ngayDi;
    //dayCome;
    gaDi;
    gaDen;
    //chon tau
    chontau: ListTau;
    //chon cho
    sltoithieu;
    BookingCode;
    chonghe = [];
    // kiem tra thong tin ve
    doituongs = [];
    doiTuong;
    doiTuong2;
    doiTuong3;
    doiTuong4;
    maPT;
    ghiChu;
    tongTien;
    thanhTien;

    loaive;
    slve;

    // booking
    hanhkhach;
    hanhkhachhai;
    hanhkhachba;
    hanhkhachtu;
    bookingPerson;
    //khứ hồi
    // constructor() {

    // }
   
}
