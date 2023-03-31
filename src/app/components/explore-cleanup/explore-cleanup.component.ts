import { ref } from '@angular/fire/storage';
import { Firestore, getDoc, doc, getDocs } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { collection, query } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore-cleanup',
  templateUrl: './explore-cleanup.component.html',
  styleUrls: ['./explore-cleanup.component.css']
})
export class ExploreCleanupComponent {
  constructor(private firestore : Firestore){
    const q = getDocs(query(collection(this.firestore,'users'))).then((que) => {
      que.forEach((docs)=>{
        const detail = docs.data()['Ocleanups']
        const id = docs.data()['uid']
        if(detail){
          this.detail = detail
        }
          })
        })
  }
 detail = {'location':'','strength':'','description':'','photoURL':''}
}
