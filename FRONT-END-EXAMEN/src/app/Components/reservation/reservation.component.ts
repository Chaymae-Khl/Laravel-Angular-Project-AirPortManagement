import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passager } from 'src/app/passager';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  passagers:any;
  passager=new Passager;
  id:any;
  data:any;
  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router){}
  ngOnInit(): void {
 
     this.id = this.route.snapshot.params['id'];
     console.log(this.route.snapshot.params['id']);
     this.getData();
   }

  insertpassData(){
    let x=window.confirm("voulez-vous ajouter vraiment?");
          if(x){
    this.dataService.insertpassData(this.passager).subscribe(res =>{
      console.log('resrvation');
    })
  
  alert("données ajoutées!");
        }
}
getData(){
  this.dataService.getVolByid(this.id).subscribe(
    (res:any) => {
      console.log(res);
      this.data = res;
    }
  )
} 
}
