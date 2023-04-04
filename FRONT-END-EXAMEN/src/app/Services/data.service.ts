import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule, HttpHeaders} from'@angular/common/http';
import { Vol } from '../vol';
import { Passager } from '../passager';
import { Bagage } from '../bagage';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  token:any=localStorage.getItem('token');
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${this.token}` })};
  //vols
  getdata(){
    return this.httpClient.get('http://127.0.0.1:8000/api/vols',this.httpOptions);

  }

  insertData(data:Vol){
    return this.httpClient.post('http://127.0.0.1:8000/api/vols',data,this.httpOptions);

  }

  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/vols/'+id,this.httpOptions);

  }

  getVolByid(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/vols/'+id,this.httpOptions);

  }
  updateVol(id:any,data:Vol){
    return this.httpClient.put('http://127.0.0.1:8000/api/vols/'+id,data,this.httpOptions);

  }
  getnbrvol(){
    return this.httpClient.get('http://127.0.0.1:8000/api/nbvols',this.httpOptions);
  }
  //passagers
  getpassData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/passager',this.httpOptions);

  }

  insertpassData(data:Passager){
    return this.httpClient.post('http://127.0.0.1:8000/api/passager',data,this.httpOptions);

  }
  
  getpass(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/passager/'+id,this.httpOptions);

  }
  getnbrpassager(){
    return this.httpClient.get('http://127.0.0.1:8000/api/nbpassager',this.httpOptions);
  }
  getdatavlpass(){
    return this.httpClient.get('http://127.0.0.1:8000/api/vols',this.httpOptions);

  }
    //bagages
    getbagadata(){
      return this.httpClient.get('http://127.0.0.1:8000/api/bagage',this.httpOptions);
  
    }
  
    insertbagaData(data:Bagage){
      return this.httpClient.post('http://127.0.0.1:8000/api/bagage',data,this.httpOptions);
  
    }
    getnbrbagage(){
      return this.httpClient.get('http://127.0.0.1:8000/api/nbbagage',this.httpOptions);
    }
    getbageByid(id:any){
      return this.httpClient.get('http://127.0.0.1:8000/api/bagage/'+id,this.httpOptions);
    }
    //signin
    register(data:User){
      return this.httpClient.post('http://127.0.0.1:8000/api/register',data);
    }
    getusers(){
      return this.httpClient.get('http://127.0.0.1:8000/api/userliste',this.httpOptions);
  
    }
//     login(data:User){
//       this.token;
//       return this.httpClient.post<any>('http://127.0.0.1:8000/api/login',data);
  
//     }
//     logout():void{
//     this.httpClient.post('http://127.0.0.1:8000/api/logout',this.httpOptions);
// }

}
