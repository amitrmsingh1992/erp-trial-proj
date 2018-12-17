import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent implements OnInit {
  public showNav: boolean;
  public showSideBar: boolean;
  public currentPage: string;
  public page: string;
 
  constructor(private router: Router) {
    this.showNav = true;
    this.showSideBar = true;
  }
 
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/erp/temp/login' || val.url === '/erp/temp/signup') {
          this.showNav = false;
          this.showSideBar = false;
        } else {
          this.showNav = true;
          this.showSideBar = true;
        }
      } 
    });
  }
  
}
