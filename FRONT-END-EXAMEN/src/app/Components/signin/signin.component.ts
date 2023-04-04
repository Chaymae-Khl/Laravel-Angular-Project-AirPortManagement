import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  user=new User;
  registerForm: any;
  constructor(private dataService:DataService,private router:Router){}


  insertuserData(){
   
    let x=window.confirm("voulez-vous ajouter l'utilisateur vraiment?");
          if(x){
    this.dataService.register(this.user).subscribe(res =>{
       
        console.log("success");
        this.router.navigate(['/authentification']);
    })
  
  alert("données ajoutées!");

        }
}
}
