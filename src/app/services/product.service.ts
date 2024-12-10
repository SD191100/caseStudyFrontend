import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5087/api/Product';

  constructor(private http: HttpClient) { }

  getFeaturedProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/browse`);
  }

  getProductsByCategoryId(categoryId: number): Observable<any[]> {
    const sortOption = 'price_asc'; // Default sort option
    const page = 1; // Default page
    const pageSize = 10; // Default page size

    return this.http.get<any[]>(
      `${this.apiUrl}/browse?categoryId=${categoryId}&sortOption=${sortOption}&page=${page}&pageSize=${pageSize}`,
    );
  }
}