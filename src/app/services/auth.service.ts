import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from './../../constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // API path
  basePath = BASE_PATH;
  tokenPath = "http://127.0.0.1:8000";
  private httpOptions: any;   // http options used for making API calls
  public jwtToken: any;       //JWT token
  public token_expires: any;  // the token expiration date
  public username: any;       // the username of the logged in user
  public errors: any = [];    // error messages received from the login attempt
  public isLoggedInSubject = false;

  constructor(private http: HttpClient, public router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.jwtToken = this.getToken();
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint

  /* public login(user: any) {
    console.log('login');
    this.http.post(this.basePath + '/login/', user, this.httpOptions).subscribe({
      next: (data) => {
        localStorage.setItem('access_token', data['access']);
        this.isLoggedInSubject = true;
        //this.updateData(data['access']);
        this.router.navigateByUrl('/railway-list');
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  } */
  

  /* JWT TOKEN */
  public login(user: any) {
    console.log('login');
    this.http.post(this.basePath + '/token/', user, this.httpOptions).subscribe({
      next: (data) => {
        localStorage.setItem('access_token', data['access']);
        localStorage.setItem('refresh_token', data['refresh']);
        /* times are set in constants (cheating, I know what they are from BE, I'm just reporting them here, no calculations involved */
        /* localStorage.setItem('access_expire', );
        localStorage.setItem('refresh_expire', ); */

        this.isLoggedInSubject = true;
        //this.updateData(data['access']);
        this.router.navigateByUrl('/railway-list');
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }


   // Refreshes the JWT token, to extend the time the user is logged in
   public verifyToken(user: any) {
    console.log('verify');
    //console.log({ "token": this.jwtToken });   
    this.http.post(this.basePath + '/token/verify/', JSON.stringify({ "token": this.jwtToken }), this.httpOptions).subscribe({
      next: (data) => console.info(data),
      error: (e) => console.error(e),
      complete: () => console.info('verify complete')
    })
  }

  isLoggedIn() {
    return this.isLoggedInSubject = false;
  }

  /*
    public login(user: any) {
      console.log('login');
      this.http.post(this.basePath + '/token/', user, this.httpOptions).subscribe(
        data => {
          this.updateData(data['access']);
        },
        err => {
          this.errors = err['error'];
        }
      );
    }
   */
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken(user: any) {
    console.log('login');
    this.http.post(this.basePath + '/token/refresh', JSON.stringify({ token: this.jwtToken }), this.httpOptions).subscribe({
      next: (data) => this.updateData(data['refresh']),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  /* public refreshToken() {
    this.http.post('/api-token-refresh/', JSON.stringify({ token: this.jwtToken }), this.httpOptions).subscribe(
      data => {
        console.log(data)
        //this.updateData(data['refresh']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  } */

  public getToken() {
    //if expiration date is still good return localstorage item, otherwise redirect to login
    this.jwtToken = localStorage.getItem('access_token');
    return this.jwtToken
  }

  public logout() {
    this.jwtToken = null;
    this.token_expires = null;
    this.username = null;
  }

  private updateData(token: any) {
    this.jwtToken = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    const token_parts = this.jwtToken.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }

}
