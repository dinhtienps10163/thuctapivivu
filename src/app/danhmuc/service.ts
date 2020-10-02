import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class service {
    url = "http://localhost:63563/api/VNR/GetDanhMuc"
    constructor(private http: HttpClient) { }
    getcomments(): Observable<any> {
        return this.http.get(this.url);
    }
}