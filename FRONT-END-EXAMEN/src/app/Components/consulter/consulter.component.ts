import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Vol } from 'src/app/vol';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent {
  vols:any;
  vol=new Vol;
  constructor(private dataService:DataService,private http:HttpClient){}
  ngOnInit(): void{
    this.getVolData();
  }
  getVolData(){
    console.log('liste des vols');
    this.dataService.getdata().subscribe(res =>{
      console.log(res);
      this.vols= res;
    })
  }
}
 