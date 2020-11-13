import { EventEmitter, Injectable} from '@angular/core';
import { listGaBacNam, listNhomCho, listDoiTuongKH, } from './modeldanhmuc';


@Injectable({ providedIn: 'root'})
export class UserProvider {
    itemGaChange = new EventEmitter();

    //gadi
    gaBacNamSelected;
    tenGaDi;
    listGaBacNam: listGaBacNam;
    //gaden
    gaBacNamSelectedcome;
    tenGaDen;
    listGaBacNamden: listGaBacNam;
    //ngay thang
    titlego;
    titleCome;
    //dayGokhuhoi;
    //chon doi tuong
    listDoiTuongKH: listDoiTuongKH;
    //con cho ngoi    
    listNhomCho: listNhomCho;
    nhonChoselected:any;
    name;
   
    // constructor() {

    // }
   
}
