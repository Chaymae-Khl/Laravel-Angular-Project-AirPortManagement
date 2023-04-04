import { Component, Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private dataService:DataService){}
 nbrvols:any;
 nbrpassagers:any;
nbrbagages:any;
users:any;

 ngOnInit(): void{
  this.getnbrvols();
  this.getnbrpassagers();
  this.getnbrbagages();
 this.getuserData();

}
getnbrvols(){
  
  this.dataService.getnbrvol().subscribe(res =>{
    console.log(res);
    this.nbrvols= res;
  })
}
getnbrpassagers(){
  
  this.dataService.getnbrpassager().subscribe(res =>{
    console.log(res);
    this.nbrpassagers= res;
  })
}

getnbrbagages(){
  
  this.dataService.getnbrbagage().subscribe(res =>{
    console.log(res);
    this.nbrbagages= res;
  })
}

getuserData(){
    console.log('liste des users');
    this.dataService.getusers().subscribe((res:any) =>{
      console.log(res);
      this.users= res;
    
    })
  }

}
@Pipe({
  name: 'tableFilteruser',
  pure: false
})
export class tableFilteruser implements PipeTransform {

  transform(users: any[], id:any) {

    return id ? users.filter(user => user.id ==id) : users;
  } 

}