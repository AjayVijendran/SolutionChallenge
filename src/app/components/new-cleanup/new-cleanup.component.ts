import { ImageUploadService } from './../../services/image-upload.service';
import { ProfileUser } from './../../models/user-profile';
import { switchMap, concatMap } from 'rxjs';
import { NewcleanupService } from './../../services/newcleanup.service';
import { UserService } from './../../services/user.service';
import { Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'new-cleanup',
  templateUrl: './new-cleanup.component.html',
  styleUrls: ['./new-cleanup.component.css']
})
export class NewCleanupComponent {
  location = ''
  desc = ''
  strength = ''
  photoURL = ''
  user$ = this.newcleanupservice.getCurrentUserProfile$()
constructor(private firestore: Firestore, private authservice :  AuthenticationService,private newcleanupservice : NewcleanupService, private toast : HotToastService, private ImageUploadService : ImageUploadService,private userservice : UserService){
}
post(){

}
uploadImage(event : any,user: ProfileUser){
  this.ImageUploadService.uploadImage(event.target.files[0],`images/Ocleanuppic/${user.uid}`).pipe(
    concatMap((photoURL)=> this.photoURL = photoURL)
  ).subscribe()
}
submit(){
  this.newcleanupservice.getCurrentUserProfile$().pipe(
    switchMap((user)=>this.newcleanupservice.updateCleanup({
      Ocleanups:{location:this.location,strength:this.strength,description:this.desc,photoURL:this.photoURL}, uid: user?.uid as string
    })),this.toast.observe({
      success: 'CleanUp registered',
      loading: 'Creating CleanUp....',
      error: ({message})=> `${message}`
    })
  ).subscribe()
}
}
