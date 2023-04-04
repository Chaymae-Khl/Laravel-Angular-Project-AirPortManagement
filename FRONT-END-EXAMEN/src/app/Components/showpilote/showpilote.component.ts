import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-showpilote',
  templateUrl: './showpilote.component.html',
  styleUrls: ['./showpilote.component.css']
})
export class ShowpiloteComponent {
  id:any;
  data:any;
  

  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router){}
  
  ngOnInit(): void {
   // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
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
