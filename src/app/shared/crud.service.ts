import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint = environment.endpoint;
  constructor(private http:HttpClient) { }

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getUsers():Observable<User>{
    return this.http.get<User>(`${this.endpoint}/users`)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  getSingleUser(id:any):Observable<User>{
    return this.http.get<User>(`${this.endpoint}/users/${id}`)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  addUser(data:any):Observable<User>{
    return this.http.post<User>(`${this.endpoint}/users/`,JSON.stringify(data),this.httpHeaders)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  updateUser(id:any,data:any): Observable<User>{
    return this.http.put<User>(`${this.endpoint}/users/${id}`,JSON.stringify(data),this.httpHeaders)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  deleteUser(id:any){
    return this.http.delete<User>(`${this.endpoint}/users/${id}`,this.httpHeaders)
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  processError(err:any){
    let message = '';
    if(err.error instanceof ErrorEvent){
      message = err.error.message;
    }
    else{
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
    
  }
}
