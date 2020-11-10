import { EventEmitter, Injectable} from '@angular/core';
import { Doituong, } from './model';
import { Doituongkhachhang, Thongtinkhachhang } from './modelBooking';
import { ListTau, RootObject, ToaX } from './modeltau';


@Injectable({ providedIn: 'root'})
export class ProviderBooking {
    itemChange = new EventEmitter();
    //chon chuyen
    maGaDi;
    maGaDen;
    loaiCho;
    dayGo;
    //dayCome;
    gaGo;
    gaCome;
    //chon tau
    chontau: ListTau;
    //chon cho
    sltoithieu;
    BookingCode;
    chonghe=[];
    // kiem tra thong tin ve
    doituongs: Doituongkhachhang[] = [];
    thongtinkhachhang: Thongtinkhachhang[]=[];
    doiTuong;
    name;
    cmnd;
    phiBaoHiem;
    ghiChu;
    thuTien;
    tongTien;
    thanhTien;
    phone;
    email;

    // constructor() {

    // }
   
}
