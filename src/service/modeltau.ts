export class ToaX {
    Id: number;
    DMTauVatLyId: number;
    ToaNo: number;
    ToaSo: string;
    ToaSoSX: number;
    ToaXe: string;
    ToaXeStatus: number;
    ToaXeLayout: number;
    ChoVatLyKeys?: any;
    ChoPhuKeys?: any;
    ListLoaiCho: string[];
    ToaXeDienGiai: string;
    NhomChoWeb: string;
}

export class ListTau {
    Id: number;
    DMTauVatLyId: number;
    MaGaDi: string;
    TenGaDi: string;
    MaGaDen: string;
    TenGaDen: string;
    GaDiKM: number;
    GaDenKM: number;
    NgayDi: Date;
    NgayDen: Date;
    MacTau: string;
    GioDi: string;
    GioDen: string;
    TongChoCon: number;
    TongChoLock: number;
    NgayXP: Date;
    BangGiaVes?: any;
    BangGiaVeKeys?: any;
    ToaXes: ToaX[];
    DMTauVatLy?: any;
    Ngay: number;
    NgayGioDi: string;
    NgayGioDen: string;
}

export class RootObject {
    ListTau: ListTau;
    BookingCode: string;
}
