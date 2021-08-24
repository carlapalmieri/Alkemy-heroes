import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if (this.authservice.loggedIn()) {
      return true
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
