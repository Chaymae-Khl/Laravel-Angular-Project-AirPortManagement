import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Vol } from 'src/app/vol';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent {
  vols:any;
  vol=new Vol;
  constructor(private dataService:DataService,private http:HttpClient){}
  ngOnInit(): void{
    this.getVolData();
  }
  getVolData(){
    console.log('liste des vols');
    this.dataService.getdatavlpass().subscribe(res =>{
      console.log(res);
      this.vols= res;
    })
  }
}
