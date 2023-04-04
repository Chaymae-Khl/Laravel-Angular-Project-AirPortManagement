import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Vol } from 'src/app/vol';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  
})

export class GestionComponent implements OnInit  {
  vols:any;
  vol=new Vol;
  id="";
  data:any;
 
  aeroport_depart: any;
  heure_depart: any;
  heure_arrive: any;
  date_depart: any;
  ville_depart: any;
  date_arrive: any;
  ville_arrive: any;
  etat: any;
  aeroport_arrive: any;
  terminal_Depart: any;
  teminal_arrive: any;
  
  constructor(private route: ActivatedRoute,private dataService:DataService,private http:HttpClient,private router: Router){}
  
  ngOnInit(): void{
    this.getVolData();
   
  }
  
  //modifier les vols
setUpdate(data:any){
this.id=data.id;
this.heure_depart=data.heure_depart;
this.heure_arrive=data.heure_arrive;
this.date_depart=data.date_depart;
this.date_arrive=data.date_arrive;
this.ville_depart=data.ville_depart;
this.ville_arrive=data.ville_arrive;
this.etat=data.etat;
this.aeroport_depart=data.aeroport_depart;
this.aeroport_arrive=data.aeroport_arrive;
this.terminal_Depart=data.terminal_Depart;
this.teminal_arrive=data.teminal_arrive;

}
 updateVol(){
  
    let x=window.confirm("voulez-vous modifier vraiment?");
    if(x){ this.dataService.updateVol(this.id,this.vol).subscribe(
      res => {
        this.router.navigate(['/gestion']);
      }  
  )
  alert("données modifiées!");
            }
  }
  //afficher liste vols
  getVolData(){
    console.log('liste des vols');
    this.dataService.getdata().subscribe(res =>{
      console.log(res);
      this.vols= res;
    })
  }
  //ajouter vols
  insertData(){
    let x=window.confirm("voulez-vous ajouter vraiment?");
          if(x){
    this.dataService.insertData(this.vol).subscribe(res =>{
      this.getVolData();
    })
  alert("données ajoutées!");
        }
}
//supprimer vols
  deleteData(id:any){
    let x=window.confirm("voulez-vous supprimer vraiment?");
          if(x){
    this.dataService.deleteData(id).subscribe(res =>{
      //console.log(res);
      this.getVolData();
    })
    alert("données supprimées!");
          }
  }
}

//filtrer les vols
@Pipe({
  name: 'tableFiltervol',
  pure: false
})
export class TableFilterPipevol implements PipeTransform {

  transform(vols: any[], id:any) {

    return id ? vols.filter(vol => vol.id ==id) : vols;
  } 

}