import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  personOneData: Array<string> = [];
  personTwoData: Array<string> = [];

  constructor(private http: HttpClient) { }

  getData() {
    const apiUrl = 'http://localhost:3000/chat';
    return this.http.get(apiUrl);
  }

  postData(data: any) {
    const apiUrl = 'http://localhost:3000/chat/';
    return this.http.post(apiUrl, data);
  }

  putData(data: any) {
    const apiUrl = 'http://localhost:3000/chat/';
    return this.http.put(apiUrl, data);
  }
  
  deleteData(url: string) {
    const apiUrl = 'http://localhost:3000/chat/';
    return this.http.delete(url);
  }
}
