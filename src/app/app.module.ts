import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitServiceService } from './produit-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: 'produits', component: ProduitComponent },
{ path: 'Dashboard', component: DashboardComponent },
{ path: 'users', component: UsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,

    ContentComponent,

    DashboardComponent,

    UsersComponent
],
  imports: [
    BrowserModule
    ,

    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
   // other imports here





  ],
  providers: [ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
