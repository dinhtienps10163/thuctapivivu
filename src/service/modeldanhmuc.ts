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