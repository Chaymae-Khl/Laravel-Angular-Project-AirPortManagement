import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-showpassager',
  templateUrl: './showpassager.component.html',
  styleUrls: ['./showpassager.component.css']
})
export class ShowpassagerComponent {
  id:any;
  data:any;
  

  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router){}
  
  ngOnInit(): void {
   // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  
  getData(){
    this.dataService.getpass(this.id).subscribe(
      (res:any) => {
        console.log(res);
        this.data = res;
      }
    )
  } 
}
