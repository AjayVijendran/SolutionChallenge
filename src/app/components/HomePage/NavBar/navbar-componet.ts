import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.html'
})
export class NavbarComponent {
  constructor(private router : Router,private authservice : AuthenticationService, private userservice: UserService){}
  user$ = this.userservice.currentUserProfile$
  profile(){
    this.router.navigate(['/profile'])
  }
}
