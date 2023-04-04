import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './Components/gestion/gestion.component';
import{AuthentificationComponent} from'./Components/authentification/authentification.component';
import{NotificationComponent} from'./Components/notification/notification.component';
import{ConsulterComponent} from'./Components/consulter/consulter.component';
import{EntrerinfopassComponent} from'./Components/entrerinfopass/entrerinfopass.component';
import{EnregistrerComponent} from'./Components/enregistrer/enregistrer.component';
import{ReserverComponent} from'./Components/reserver/reserver.component';
import{AcheterComponent} from'./Components/acheter/acheter.component';
import{AccueilComponent} from'./Components/accueil/accueil.component';
import { CommonModule } from '@angular/common';
import{VoleditComponent} from'./Components/voledit/voledit.component';
import { ListebagagesComponent } from './Components/listebagages/listebagages.component';
import { SigninComponent } from './Components/signin/signin.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { AdminComponent } from './Components/admin/admin.component';
import { ChatadminComponent } from './Components/chatadmin/chatadmin.component';
import { ShowbagagesComponent } from './Components/showbagages/showbagages.component';
import { ShowpassagerComponent } from './Components/showpassager/showpassager.component';
import { ShowvolComponent } from './Components/showvol/showvol.component';
import { ShowpiloteComponent } from './Components/showpilote/showpilote.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
const routes: Routes = [
  {  
  
    path : 'accueil',
    component:AccueilComponent
  },
  {  
  
    path : 'authentification',
    component:AuthentificationComponent
  },
  {  
    path : 'gestion',
    component:GestionComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path : 'notification',
    component:NotificationComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path : 'enregistrer',
    component:EnregistrerComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path : 'consulter',
    component:ConsulterComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path : 'entrerinfopass',
    component:EntrerinfopassComponent,
    canActivate: [AuthGuardService] 
  },
  
  {  
    path : 'reserver',
    component:ReserverComponent
  },
  {  
    path : 'acheter',
    component:AcheterComponent
  },
  {  
    path : '',redirectTo:'accueil',pathMatch:'full'
    
  },
  {  
    path : 'reservation',
    component:ReservationComponent
  },
 
  {  
    path:'show/:id',component:ShowbagagesComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'showpass/:id',component:ShowpassagerComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'showvol/:id',component:ShowvolComponent,
    // canActivate: [AuthGuardService] 
  },
  {  
    path:'showpil/:id',component:ShowpiloteComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'edit/:id',component:VoleditComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'listebagage',component:ListebagagesComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'urg',component:ListebagagesComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'admin',component:AdminComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'chatadmin',component:ChatadminComponent,
    canActivate: [AuthGuardService] 
  },
  {  
    path:'signin',component:SigninComponent,
    
  },

];

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
