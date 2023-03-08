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

  postData(data: any) {
    const apiUrl = 'http://localhost:3000/wrestlers/'
    return this.http.post(apiUrl, data);
  }

  editData(data: any, id: number) {
    const apiUrl = 'http://localhost:3000/wrestlers/' + id;
    return this.http.put(apiUrl, data);
  }

  deleteData(id: number) {
    const apiUrl = 'http://localhost:3000/wrestlers/' + id;
    return this.http.delete(apiUrl);
  }
}
