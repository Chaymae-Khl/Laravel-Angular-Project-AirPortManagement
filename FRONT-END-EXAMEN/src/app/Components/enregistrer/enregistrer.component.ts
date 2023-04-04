import { Component, OnInit } from '@angular/core';
import { Bagage } from 'src/app/bagage';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.css']
})
export class EnregistrerComponent implements OnInit{
  bagages:any;
  bagage=new Bagage;


  constructor(private dataService:DataService){}

  ngOnInit(): void{
    // this.getbagadata();
  }
  
   
    insertbagaData(){
      
      let x=window.confirm("voulez-vous ajouter vraiment?");
            if(x){
      this.dataService.insertbagaData(this.bagage).subscribe(res =>{
      
        // this.getbagadata();
      })
    
    alert("données ajoutées!");
          }
  }
}
