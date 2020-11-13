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

   
}
export class listNhomCho{
     code: string;
     name: string;
     selected: boolean;
   
}
export class listLoaiCho{
    nhomCho: string
    MaLoaiCho: string
    dienGiai: string
    
}
export class listDoiTuongKH{
    nhom: string
    maPT: number
    tyLe: number
    tenPTOnline: string
    amount: number = 0 
    
}