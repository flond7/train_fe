//import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_PATH } from './../../constants';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API path
  basePath = BASE_PATH;
  private token: any;

  // Http Options
  getOptions() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.AuthService.getToken()
    if (this.AuthService.token) {
      headers = headers.set('Authorization', `Token ${this.AuthService.token}`);
    }
    return { headers };
  }

  constructor(private http: HttpClient, public AuthService: AuthService) { }

  // Save partial answer
  savePartialAnswer(user: any, answers: any) {
    console.log(user);
    console.log(answers);
  }

  getRailwayList(): Observable<any> {
    /* this.AuthService.verifyToken(this.AuthService.jwtToken); */
    return this.http.get<any>(this.basePath + '/railway-list/', this.getOptions())}

  getRailwayDetail(id: any): Observable<any> {
    return this.http.get<any>(this.basePath + '/railway-detail/' + id, this.getOptions())
  }
  getRailwayVideoList(id: any): Observable<any> {
    return this.http.get<any>(this.basePath + '/railway-video-list/' + id, this.getOptions())
  }

  getVideoDetails(id: any): Observable<any> {
    return this.http.get<any>(this.basePath + '/video-detail/' + id, this.getOptions())}



  getUserResults(id: any): Observable<any> {
    return this.http.get<any>(this.basePath + '/user-results/' + id, this.getOptions())}

  /* getVideoDetails(id: any): Observable<any> {
    return this.http
      .get<any>(this.basePath + '/video-details/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
 */

  // Create a new item
  /* createItem(item): Observable<Student> {
    return this.http
      .post<Student>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get single student data by ID
  getItem(id): Observable<Student> {
    return this.http
      .get<Student>(this.basePath + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get students data
  getList(): Observable<Student> {
    return this.http
      .get<Student>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update item by id
  updateItem(id, item): Observable<Student> {
    return this.http
      .put<Student>(
        this.basePath + '/' + id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Student>(this.basePath + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  } */
}



/*   // Drugs
  getDrugs() {
    return this.http.get<any>(`${environment.baseUrl}/drugs`, this.getOptions());
  }


  postHelpMessage(data) {
    return this.http.post<any>(`${environment.baseUrl}/help`, data, this.getOptions());
  }

  // Patients
  getPatients(itemsNum, page, sorting) {
    return this.http.get<any>(`${environment.baseUrl}/patients?&limit=${itemsNum}&offset=${itemsNum * (page - 1)}&sorting=${sorting}`, this.getOptions())/* .pipe(
      map(res => {
        res.data.forEach(removeUnknownFromPatient);
        return res;
      })
    ) ;
  }
  getPatient(id) {
    return this.http.get<any>(`${environment.baseUrl}/patients/${id}`, this.getOptions()).pipe(
      map(res => {
        removeUnknownFromPatient(res.data);
        return res;
      })
    );
  }
  createPatient(patient) {
    return this.http.post<any>(`${environment.baseUrl}/patients`, { patient }, this.getOptions());
  }
  updatePatient(id, patient) {
    return this.http.patch<any>(`${environment.baseUrl}/patients/${id}`, { patient }, this.getOptions());
  }
  deletePatient(patientId) {
    return this.http.delete<any>(`${environment.baseUrl}/patients/${patientId}`, this.getOptions());
  }

  // Smartpix
  getSmartpixData() {
    return this.http.get<any>(`${environment.baseUrl}/smartpix`, this.getOptions());
  }
  updateSmartpixData(id, pre_post) {
    return this.http.patch<any>(`${environment.baseUrl}/smartpix/${id}`, { pre_post }, this.getOptions());
  }

  // Therapies
  createTherapy(patientId, data) {
    return this.http.post<any>(`${environment.baseUrl}/patients/${patientId}/therapies`, { therapy: { data } }, this.getOptions());
  }
  deleteTherapy(patientId, therapyId) {
    return this.http.delete<any>(`${environment.baseUrl}/${patientId}/therapies/patients/${therapyId}`, this.getOptions());
  }

  // Analytics
  getAnalytics() {
    return this.http.get<any>(`${environment.baseUrl}/analytics`, this.getOptions());
  }
}
 */
