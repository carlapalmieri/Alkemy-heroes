import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://challenge-react.alkemy.org';

  constructor(private router: Router) { }

  getAuthToken(user: any) {
    return axios.post(this.URL, user).then( function( res ) {
      console.log(res.data);
      localStorage.setItem('token', res.data.token)
    }).catch(function (err) { console.log(err)} )
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}