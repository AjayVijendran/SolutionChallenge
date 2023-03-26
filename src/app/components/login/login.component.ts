import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService : AuthenticationService,
    private router : Router,
    private toast: HotToastService
    ){}
  email = ''
  password = ''
  submit(){
    this.authService.login(this.email as string,this.password as string).pipe(
      this.toast.observe({
        success: 'Successfully Connected',
        loading: 'Connecting....',
        error: 'Bad Credentials',
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    })
  }

}
