import { Time } from "@angular/common";
import { ListTau } from "./modeltau";

export default class booking{
    name: string;
    phone: number;
    email: string;
    cmnd: number;
    doiTuong: string;
    chontau: ListTau;
    soGhe: number;
    soToa: number;
    giaVe: number;
    tienThu: number;
    thanhTien: number;
    tongTien: number;
    tenCty: string;
    maThue: string;
    diaChi: string;
    phiBaoHiem: number;
    BookingCode: string;

}
export class Thongtinkhachhang{
    doituong: string;
    ten: string;
    cmnd: number;
}
export class Doituongkhachhang{
    doituong: string;
    ten: string;
    cmnd: number;
}