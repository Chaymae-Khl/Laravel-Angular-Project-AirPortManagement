import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bagage } from 'src/app/bagage';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-showbagages',
  templateUrl: './showbagages.component.html',
  styleUrls: ['./showbagages.component.css']
})
export class ShowbagagesComponent implements OnInit{
  id:any;
  data:any;
  

  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router){}
  
  ngOnInit(): void {
   // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  
  getData(){
    this.dataService.getbageByid(this.id).subscribe(
      (res:any) => {
        console.log(res);
        this.data = res;
      }
    )
  } 
} 
 