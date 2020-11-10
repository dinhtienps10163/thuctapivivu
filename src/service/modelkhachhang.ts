
    export class ListKhuyenMai {
        DetailID: number;
        MasterID: number;
        LoaiDC: number;
        GiaTriDC: number;
        SoTienGiam: number;
    }

    export class HanhKhach {
        HoTen: string;
        SoGiayTo: string;
        MaPT: number;
        TicketId: number;
        RefTicketID: number;
        IsVeChieuVe: boolean;
        GaDiKM: number;
        GaDenKM: number;
        Ngay: number;
        TienThu: number;
        DMChoVLId: number;
        DMToaVLId: number;
        DMTauVLId: number;
        DMTauId: number;
        DMLoaiChoId: number;
        GiaVe: number;
        BaoHiem: number;
        GiamGiaPT: number;
        GiamGiaTG: number;
        Signature: string;
        ListKhuyenMai: ListKhuyenMai[];
    }

    export class BookingPerson {
        BookingCode: string;
        HoTen: string;
        SoGiayTo: string;
        Email: string;
        Mobile: string;
        CongTy: string;
        DiaChi: string;
        MST: string;
        MaKH: string;
        AdultTicketID: number;
        ReturnAdultTicketID: number;
    }

    export class RootObject {
        HanhKhachs: HanhKhach[];
        BookingPerson: BookingPerson;
        AppVersion: string;
        DataVersion: string;
        CongTT: string;
        Locale: string;
    }

//trả về

    export class CustomerErrorMsg {
        Id: number;
        ErrorCode: string;
        ErrorMsg: string;
        HoTen: string;
        SoGiayTo: string;
    }

    export class TicketErrorMsg {
        TicketId: number;
        ErrorCode: string;
        ErrorMsg: string;
        HoTen: string;
        Status: number;
    }

    export class RootObjectTraVe {
        Status: number;
        CustomerErrorMsgs: CustomerErrorMsg[];
        TicketErrorMsg: TicketErrorMsg[];
        ErrorCode: string;
        ErrorMsg: string;
        PaymentId: number;
        TongTien: number;
        Duration: number;
        ThoiGianGiuVeOnline: number;
        ThoiGianGiuVeTraSau: number;
        RedirectUrl: string;
    }
