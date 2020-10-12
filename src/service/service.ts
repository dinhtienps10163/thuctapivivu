import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { list } from './model';
@Injectable({
    providedIn: 'root'
})
    
export class service {
    url = "http://localhost:63563/api/VNR/GetDanhMuc"
    //url = "http://dev2.partner.vnticketonline.vn:83/api/HeThong/GetDanhMuc"
    constructor(private http: HttpClient) { }
    getcomments(): Observable<any> {
        return this.http.get<list>(this.url);
    }
}
export class serviceGetTimKiem{
    url = ""
    constructor(private http: HttpClient){}
       // getcomments(): Observable<any>{
           // return this.http.post(this.url)
    //}
}