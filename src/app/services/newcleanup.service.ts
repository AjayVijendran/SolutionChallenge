import { ref } from '@angular/fire/storage';
import { doc, Firestore, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable, switchMap, of, from } from 'rxjs';
import { ProfileUser } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class NewcleanupService {

  constructor(private firestore:Firestore,private authservice: AuthenticationService) {}
  getCurrentUserProfile$() : Observable<ProfileUser|null>{
    return this.authservice.currentUser$.pipe(
      switchMap(user=>{
        if(!user?.uid) return of(null)
        const ref = doc(this.firestore,'users',user.uid)
        return docData(ref) as Observable<ProfileUser>
      })
    )
  }
  updateCleanup(user:ProfileUser):Observable<any>{
    const ref = doc(this.firestore,'users',user.uid)
    return from(updateDoc(ref,{...user}))
  }
}
