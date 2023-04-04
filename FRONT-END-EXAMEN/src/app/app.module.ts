import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { ClientsSectionComponent } from './Components/clients-section/clients-section.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { GestionComponent, TableFilterPipevol } from './Components/gestion/gestion.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { EnregistrerComponent } from './Components/enregistrer/enregistrer.component';
import { ConsulterComponent } from './Components/consulter/consulter.component';
import { EntrerinfopassComponent, tableFilterpassager } from './Components/entrerinfopass/entrerinfopass.component';
import { ReserverComponent } from './Components/reserver/reserver.component';
import { AcheterComponent } from './Components/acheter/acheter.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { VoleditComponent } from './Components/voledit/voledit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListebagagesComponent } from './Components/listebagages/listebagages.component';
import { SigninComponent } from './Components/signin/signin.component';
import { TableFilterPipe } from './Components/listebagages/listebagages.component';
import { AdminComponent, tableFilteruser } from './Components/admin/admin.component';
import { ChatadminComponent } from './Components/chatadmin/chatadmin.component';
import { UrgComponent } from './Components/urg/urg.component';
import { ShowbagagesComponent } from './Components/showbagages/showbagages.component';
import { ShowpassagerComponent } from './Components/showpassager/showpassager.component';
import { ShowvolComponent } from './Components/showvol/showvol.component';
import { ShowpiloteComponent } from './Components/showpilote/showpilote.component';
import { ReservationComponent } from './Components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    AuthentificationComponent,
    GestionComponent,
    NotificationComponent,
    EnregistrerComponent,
    ConsulterComponent,
    EntrerinfopassComponent,
    ReserverComponent,
    AcheterComponent,
    AccueilComponent,
    VoleditComponent,
    ListebagagesComponent,
    SigninComponent,
    TableFilterPipe,
    TableFilterPipevol,
    AdminComponent,
    ChatadminComponent,
    UrgComponent,
    tableFilterpassager,
    ShowbagagesComponent,
    ShowpassagerComponent,
    ShowvolComponent,
    ShowpiloteComponent,
    ReservationComponent,
    tableFilteruser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

