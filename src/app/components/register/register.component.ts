import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authservice : AuthenticationService,private router : Router,private toast: HotToastService){}
  name=''
  email=''
  password=''
  submit(){
    this.authservice.register(this.name,this.email,this.password).pipe(
      this.toast.observe({
        success: "Registered Successfully",
        loading: "Connecting....",
        error: ({message}) => `${message}`
      })
    ).subscribe(()=> {
      this.router.navigate(['/home'])
    })
  }
}
