import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './NavBar/navbar-componet';
import { SidebarComponent } from './SideBar/sidebar.component';
@NgModule({
  declarations:[
    HomeComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports:[
    BrowserModule
  ],
  exports:[
    HomeComponent
  ],
  providers:[],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
