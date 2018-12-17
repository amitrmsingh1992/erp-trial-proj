import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private route: Router ) { 
  }

  signupCredential = (ev) => {
    let a = [];
    let uniqueFlag = true;
    if (JSON.parse(localStorage.getItem('user'))){
      a = JSON.parse(localStorage.getItem('user'));
    }
    
    if (a.length > 0) {
      uniqueFlag = this.checkUnique(ev);
    }
    if (uniqueFlag) {
      a.push(ev);
      localStorage.setItem('user', JSON.stringify(a));
      this.route.navigate(['erp/temp/students']);
    } else {
      alert('It seems emailID/phone number already been taken');
    }
  }
  
  checkUnique(ev) {
    let a = JSON.parse(localStorage.getItem('user'));
    let duplicateFlag = true; 
    for (const iterator of a) {
      if (iterator.id === ev.id) {
        duplicateFlag = false;
        break;
      }    
    }
    return duplicateFlag;
  }

}
