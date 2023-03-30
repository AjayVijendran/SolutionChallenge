import { FormsModule } from '@angular/forms';
import { HomeModule } from './../HomePage/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NewCleanupComponent } from './new-cleanup.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    NewCleanupComponent
  ],
  imports : [
    BrowserModule,
    HomeModule,
    FormsModule
  ],
  exports : [
    NewCleanupComponent
  ],
  providers : [],
  bootstrap : [NewCleanupComponent]
})
export class NewCleanupModule{}
