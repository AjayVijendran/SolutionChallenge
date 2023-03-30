import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/HomePage/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NewCleanupComponent } from './components/new-cleanup/new-cleanup.component'
import { MyCleanupsComponent } from './components/my-cleanups/my-cleanups.component';
import { ExploreCleanupComponent } from './components/explore-cleanup/explore-cleanup.component';
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'newCleanup',
    component: NewCleanupComponent
  },
  {
    path: 'my-cleanups',
    component: MyCleanupsComponent,
  },
  {
    path: 'explore-cleanup',
    component: ExploreCleanupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
