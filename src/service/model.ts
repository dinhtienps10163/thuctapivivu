
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
export class XinVe {
    Status: number;
    Duration: number;
    LockBD: Date;
    TicketId: number;
}