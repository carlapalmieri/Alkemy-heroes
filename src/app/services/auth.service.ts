import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Cerraste sesión',
          showConfirmButton: false,
          timer: 800
        })
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    })
  }
}