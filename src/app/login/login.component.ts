import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  loginCredential = (ev) => {
    if (!localStorage.getItem('user')) {
      this.route.navigate(['/erp/temp/signup']);
    } else {
      let loginData:any = [];
      loginData = JSON.parse(localStorage.getItem('user'));
      for (const iterator of loginData) {
        if (iterator.id == ev.id && iterator.password === ev.password) {
            localStorage.setItem('currentUser', ev.id); 
            this.route.navigate(['/erp/temp/students']);
        }
      }
    }
  }
}
