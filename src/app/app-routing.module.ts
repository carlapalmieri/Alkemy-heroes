import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/heroes/details/details.component';
import { SeekerComponent } from './components/heroes/seeker/seeker.component';
import { TeamComponent } from './components/heroes/team/team.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'heroes',
    component: TeamComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SeekerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
