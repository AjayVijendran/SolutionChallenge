import { Injectable } from '@angular/core';
import {Auth,authState,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, UserInfo} from '@angular/fire/auth'
import {switchMap, Observable, concatMap, of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
  currentUser$ = authState(this.auth)
  login(email: string, pwd: string){
    return from(signInWithEmailAndPassword(this.auth,email,pwd))
  }
  logout(){
    return from(this.auth.signOut())
  }
  register(email:string,password:string){
    console.log(from(createUserWithEmailAndPassword(this.auth,email,password)))
    return from(createUserWithEmailAndPassword(this.auth,email,password))
  }
  updateProfileData(ProfileData : Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if(!user) throw new Error('Not Authenticated');
        return updateProfile(user,ProfileData);
      })
    )
  }
}
