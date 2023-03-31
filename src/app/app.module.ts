import { NewCleanupModule } from './components/new-cleanup/new-cleanup.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { HomeModule } from './components/HomePage/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ProfileComponent } from './components/profile/profile.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { NewCleanupComponent } from './components/new-cleanup/new-cleanup.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ExploreCleanupComponent } from './components/explore-cleanup/explore-cleanup.component';
import { MyCleanupsComponent } from './components/my-cleanups/my-cleanups.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/HomePage/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyCleanupsComponent,
    ExploreCleanupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NewCleanupModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot({
      dismissible: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
