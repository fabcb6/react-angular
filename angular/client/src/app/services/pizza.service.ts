import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '@models';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3001';
  }

  getAll = (): Observable<ApiResponse> => {
    const endpoint = `${this.baseUrl}/pizzas`;
    return this.http.get<ApiResponse>(endpoint, {});
  };
}
