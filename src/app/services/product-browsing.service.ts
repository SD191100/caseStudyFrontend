import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductBrowsingService {
  private readonly apiUrl = 'https://localhost:7251/api/Product/browse';
  
  constructor(private http: HttpClient) {}

  getProducts(queryParams: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, { params: queryParams });
  }
}
