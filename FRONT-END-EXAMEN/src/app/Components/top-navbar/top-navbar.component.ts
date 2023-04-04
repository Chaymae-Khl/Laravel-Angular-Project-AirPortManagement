import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent {
message='';
  router: any;

constructor(private http:HttpClient){}

token:any=localStorage.getItem('token');
httpOptions = {headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': `Bearer ${this.token}` })};
authenticated=false;

ngOnInit():void{
  
  this.http.get('http://127.0.0.1:8000/api/user',this.httpOptions).subscribe(
    (res:any)=>{
      // console.log(res);
      this.message=`${res.name}`;
      this.authenticated=true;
    },
    err=>{
      this.message='your are offline';
    }
  )
}
logout():void{
localStorage.removeItem('token');
this.router.navigate(['/accueil']);
 console.log(this.token);
}
}
 