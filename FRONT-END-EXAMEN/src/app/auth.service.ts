import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  // public loginData:any={};
  // constructor(public http: HttpClient) { }
  // token:any=localStorage.getItem('jwt');
  // httpOptions = {headers: new HttpHeaders({
  //   'Content-Type':  'application/json',
  //   'Authorization': `Bearer ${this.token}` })};

  //   loginService(){
  //     let url = 'http://127.0.0.1:8000/api/login';
  //     return this.http.post<any>(url,this.loginData);
  //   }
}
