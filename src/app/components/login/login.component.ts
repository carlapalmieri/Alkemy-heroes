import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup 
 

  constructor( private router: Router, private authservice: AuthService, private builder: FormBuilder  ) { 
    this.userForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit() {
    console.log(this.userForm)
  }

  signIn(values: any) {
    this.authservice.getAuthToken(values).then( () => {
      this.router.navigate(['/heroes'])
    })
  }
}
