export class list {
    listGaBacNam: listGaBacNam[]
    listNhomCho: listNhomCho[]
    listLoaiCho: listLoaiCho[]
    listDoiTuongKH: listDoiTuongKH[]
    //amount: number=0
}
export class listGaBacNam {
     id: string;
     maGa: string;
     tenGa: string;
     sKeys: string;
     selected: boolean;

    constructor(id: string, maGa: string, tenGa: string, sKeys: string){
        this.id = id
        this.maGa = maGa
        this.tenGa = tenGa
        this.sKeys = sKeys

    }
}
export class listNhomCho{
     code: string;
     name: string;
     selected: boolean;
    constructor(code: string, name: string){
        this.code = code;
        this.name =  name;
    }
}
export class listLoaiCho{
    nhomCho: string
    MaLoaiCho: string
    dienGiai: string
    constructor(nhomCho: string, MaLoaiCho: string, dienGiai: string){
        this.nhomCho = nhomCho
        this.MaLoaiCho =MaLoaiCho
        this.dienGiai = dienGiai
    }
}
export class listDoiTuongKH{
    nhom: string
    maPT: number
    tyLe: number
    tenPTOnline: string
    amount: number = 0 
        constructor(nhom: string, maPT: number, tyLe: number, tenPTOnline: string, amount?: number){
        this.nhom = nhom;
        this.maPT = maPT;
        this.tenPTOnline = tenPTOnline;
        this.tyLe = tyLe;
        this.amount = amount || 0;
    }
}
export class RootObject {
    listTau: ListTau;
    bookingCode: string='';
}
export class ListTau{
    id: number
    dmTauVatLyId: number
    maGaDi: string
    tenGaDi: string
    maGaDen: string
    tenGaDen: string
    gaDiKM: number
    gaDenKM: number
    ngayDi: Date
    ngayDen:Date
    macTau: string 
    gioDi: string 
    gioDen: string 
    tongChoCon: number 
    tongChoLock: number 
    ngayXP: Date 
    bangGiaVes: object 
    bangGiaVeKeys: object 
    toaXes: ToaX[] 
    dmTauVatLy: object 
    ngay: number 
    ngayGioDi: string 
    ngayGioDen: string 
}
export class ToaX{
    id: number;
    dmTauVatLyId: number;
    toaNo: number;
    toaSo: string;
    toaSoSX: number;
    toaXe: string;
    toaXeStatus: number;
    toaXeLayout: number;
    choVatLyKeys?: any;
    choPhuKeys?: any;
    listLoaiCho: string[];
    toaXeDienGiai: string;
    nhomChoWeb: string;
}

// đặt chổ
export class chonCho {
    ToaXe: ToaXe;
    Chos: Cho;
}
export class ToaXe {
    id: number;
    dmTauVatLyId: number;
    toaNo: number;
    toaSo: string;
    toaSoSX: number;
    toaXe: string;
    toaXeStatus: number;
    toaXeLayout: number;
    choVatLyKeys: string[];
    choPhuKeys: string[];
    listLoaiCho: string[];
    toaXeDienGiai: string;
    nhomChoWeb: string;
}

export class Status {
    status: number;
    ticketId: number;
    duration: number;
    tenGaDi: string;
    tenGaDen: string;
    lyDo: string;
}

export class Cho {
    id: number;
    dmToaXeVatLyId: number;
    dmLoaiChoId: number;
    choSo: number;
    loaiCho: string;
    giaVe: number;
    ticketId: number;
    toaXe: string;
    toaSo: string;
    toaXeLayout: number;
    status: Status;
    veVatLyKeys: string[];
    nguyenGia: number;
    tienThu: number;
    baoHiem: number;
    giamGiaTG: number;
}


