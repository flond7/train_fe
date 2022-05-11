import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // API path
  basePath = 'http://127.0.0.1:8000/api';

  // Http Options
  getOptions() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    /* if (this.auth.jwtToken) {
      headers = headers.append('Authorization', `Bearer: ${this.auth.jwtToken}`);
    } */
    return { headers };
  }
  constructor() { }
}
