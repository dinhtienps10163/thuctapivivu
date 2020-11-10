
export class Status {
    Status: number;
    TicketId: number;
    Duration?: any;
    TenGaDi: string;
    TenGaDen: string;
    LyDo?: any;
}

export class ChoChinh {
    [x: string]: any;
    Id: number;
    DMToaXeVatLyId: number;
    DMLoaiChoId: number;
    ChoSo: number;
    LoaiCho: string;
    GiaVe: number;
    TicketId: number;
    ToaXe: string;
    ToaSo: string;
    ToaXeLayout: number;
    Status: Status;
    VeVatLyKeys?: any;
    NguyenGia: number;
    TienThu: number;
    BaoHiem: number;
    GiamGiaTG: number;
}

export class ChobyToa {
    ChoChinhs: ChoChinh;
    ChoPhus: any[];
    ChoChinhStatus: number;
    ChoPhuStatus: number;
}


export class Doituong{
    name: string
}
export class ChonGhe{
    choso: number;
}
export class Information{
    name: string;
    phone: number;
    email: string;
    CMND: number;
    constructor(name: string, phone: number, email: string, CMND: number){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.CMND = CMND;
    }
}