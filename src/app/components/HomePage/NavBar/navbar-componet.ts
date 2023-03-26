import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.html'
})
export class NavbarComponent {
  constructor(private router : Router,private authservice : AuthenticationService){}
  user$ = this.authservice.currentUser$
  profile(){
    this.router.navigate(['/profile'])
  }
}
