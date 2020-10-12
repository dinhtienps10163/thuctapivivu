import { EventEmitter, Injectable} from '@angular/core';
import { listday, listGaBacNam, listNhomCho, listDoiTuongKH, } from './model';


@Injectable()
export class UserProvider {
    itemGaChange = new EventEmitter();
    ischeck: boolean = true;
    listGaBacNam: listGaBacNam;
    listGaBacNamden: listGaBacNam;

    listNhomCho: listNhomCho;
    listDoiTuongKH: number;
    titlego:Date;
    titlecome:Date;
    constructor() {

    }
}