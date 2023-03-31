import { NewcleanupService } from './../../services/newcleanup.service';
import { ProfileUser } from './../../models/user-profile';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
@Component({
  selector: 'my-cleanups',
  templateUrl: './my-cleanups.component.html',
  styleUrls: ['./my-cleanups.component.css']
})
export class MyCleanupsComponent {
  constructor(private userservice : UserService,private newcleanupservice : NewcleanupService,private firestore : Firestore){
  }
  user$ = this.newcleanupservice.getCurrentUserProfile$()
}
