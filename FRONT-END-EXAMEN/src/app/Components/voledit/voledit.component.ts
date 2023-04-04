import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Vol } from 'src/app/vol';

@Component({
  selector: 'app-voledit',
  templateUrl: './voledit.component.html',
  styleUrls: ['./voledit.component.css']
})
export class VoleditComponent implements OnInit{
  [x: string]: any;

  id:any;
  data:any;
  vol=new Vol();
  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router){}
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
getData(){
  this.dataService.getVolByid(this.id).subscribe(
    res => {
      console.log(res);
      this.data = res;
      this.vol=this.data;
    }
  )
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

}
function updateVol() {
  throw new Error('Function not implemented.');

}
