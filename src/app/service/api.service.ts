import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    const apiUrl = 'http://localhost:3000/wrestlers'
    return this.http.get(apiUrl);
  }
}
