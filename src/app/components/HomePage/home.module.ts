import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './NavBar/navbar-componet';
@NgModule({
  declarations:[
    HomeComponent,
    NavbarComponent
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
