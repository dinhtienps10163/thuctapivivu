export class list {
    listGaBacNam: string
    listNhomCho: string
    listLoaiCho: string
    listDoiTuongKH: string
}
export class listGaBacNam {
    id: number
    maGa: string
    tenGa: string
    sKeys: string
}
export class listNhomCho{
    code: string
    name: string
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
}
