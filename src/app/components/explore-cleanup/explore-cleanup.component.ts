import { ref } from '@angular/fire/storage';
import { Firestore, getDoc, doc, getDocs } from '@angular/fire/firestore';
import { Component, SecurityContext, ViewEncapsulation } from '@angular/core';
import { collection, query } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-explore-cleanup',
  templateUrl: './explore-cleanup.component.html',
  styleUrls: ['./explore-cleanup.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ExploreCleanupComponent {
  constructor(private firestore : Firestore,private sanitizer : DomSanitizer){
    const q = getDocs(query(collection(this.firestore,'users'))).then((que) => {
      que.forEach((docs)=>{
        const detail = docs.data()['Ocleanups']
        const id = docs.data()['uid']
        if(detail){
            this.cleanupdetail+= this.sanitizer.sanitize(SecurityContext.HTML,this.sanitizer.bypassSecurityTrustHtml(`<div class="container">
            <div class="card">
                <div class="card-image card-1">
                  <img src="${detail['photoURL']}" width="269px" height ="150px"/>
                </div>
                    <h2>${detail['location']}</h2>
                    <p>${detail['description']}</p>
                    <a href="">Join Now</a>
            </div>
           </div>`))
        }
          })
        })
  }
 detail = {'location':'','strength':'','description':'','photoURL':''}
 cleanupdetail = ''
}
