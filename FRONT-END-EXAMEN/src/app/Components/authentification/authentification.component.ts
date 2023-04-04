import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent  {

 message:any;
  constructor(private http:HttpClient,private router: Router,private activateroute:ActivatedRoute, ) { }

 
  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){

    const email = form.value.email;
    const password = form.value.password;
    const poste = form.value.poste;
    this.http.post('http://127.0.0.1:8000/api/login',{
        email: email,
        password:password,
        poste:poste,
       
    }).subscribe((res:any)=>{
     console.log(res);
     localStorage.setItem('token',res.message);
        if(poste=='admin'){
          this.router.navigate(['/admin']);
        }
         else if(poste=='responsable vol')
        this.router.navigate(['/gestion']);
        else if(poste=='pilote')
        this.router.navigate(['/consulter']);
        else if(poste=='agent Escale')
        this.router.navigate(['/entrerinfopass']);
        else if(poste=='hotesse aeroport')
        this.router.navigate(['/enregistrer']);
        else if(poste=='pompier')
        this.router.navigate(['/notification']);
 
    }, 
    err=>{
        console.log(err);
       this.message="Mots de pass ou login Incorrecte";
    });
}
}
