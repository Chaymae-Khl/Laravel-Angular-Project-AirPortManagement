import { Component } from '@angular/core';
import { Bagage } from 'src/app/bagage';
import { DataService } from 'src/app/Services/data.service';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-listebagages',
  templateUrl: './listebagages.component.html',
  styleUrls: ['./listebagages.component.css']
})
export class ListebagagesComponent {
  bagages:any;
  bagage=new Bagage;
  
  constructor(private dataService:DataService){}

  ngOnInit(): void{
    this.getbagaData();

  }
  getbagaData(){

    this.dataService.getbagadata().subscribe(res =>{
      //console.log(res);
      this.bagages= res;
    })
  }
  getbageByid(id:any){
    this.dataService.getbageByid(id).subscribe(res=>{
      console.log(res);
     this.bagages=res;
    })
  }


}
@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(bagages: any[], id_pass:string) {

    return id_pass ? bagages.filter(bagage => bagage.id_pass ==id_pass) : bagages;
  }

}
 