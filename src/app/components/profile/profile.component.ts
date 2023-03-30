import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { ImageUploadService } from './../../services/image-upload.service';
import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileUser } from 'src/app/models/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  constructor(private authservice : AuthenticationService, private ImageUploadService : ImageUploadService, private toast : HotToastService,private router : Router,private userservice: UserService){}
  email =''
  name=''
  phone=''
  address=''
  user$ = this.userservice.currentUserProfile$
  ngOnInIt() : void{
  }
  uploadImage(event: any, user: ProfileUser){
    this.ImageUploadService.uploadImage(event.target.files[0],`images/profile/${user.uid}`).pipe(
        this.toast.observe({
          success: "Image Uploaded",
          loading: "Uploading...",
          error: "there was an error"
        }),
        concatMap((photoURL)=> this.userservice.updateUser({uid:user.uid,photoURL:photoURL}))
    ).subscribe();
  }
  profileForm(){

  }
  logout(){
    this.authservice.logout().subscribe(()=>{
      this.router.navigate(['/login'])
    })
  }
}
