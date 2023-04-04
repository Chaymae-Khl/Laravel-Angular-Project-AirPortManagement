import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Passager } from 'src/app/passager';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-entrerinfopass',
  templateUrl: './entrerinfopass.component.html',
  styleUrls: ['./entrerinfopass.component.css']
})
export class EntrerinfopassComponent implements OnInit{
  passagers:any;
  passager=new Passager;

constructor(private dataService:DataService){}
ngOnInit(): void{
  this.getpassData();

}

  getpassData(){
    console.log('liste des vols');
    this.dataService.getpassData().subscribe(res =>{
      console.log(res);
      this.passagers= res;
    })
  }

  insertpassData(){
    let x=window.confirm("voulez-vous ajouter vraiment?");
          if(x){
    this.dataService.insertpassData(this.passager).subscribe(res =>{
      this.getpassData();
    })
  
  alert("données ajoutées!");
        }
}

  // showApiData(){
  //   this.dataService.getpass(id).subscribe(
  //     res=>{
  //        console.log(res);
  //     }
  //   );
  // }
  

}
@Pipe({
    name: 'tableFilterpassager',
    pure: false
  })
  export class tableFilterpassager implements PipeTransform {
  
    transform(passagers: any[], id:any) {
  
      return id ? passagers.filter(passager => passager.id ==id) : passagers;
    } 
  
  }