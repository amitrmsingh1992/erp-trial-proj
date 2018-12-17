import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  
  public addLinkActive: boolean;
  constructor(private route: Router) {
    this.addLinkActive = true;
  }

  addLinkClicked() {
    this.addLinkActive = false;
    this.route.navigate(['/erp/temp/students/add']);
  }
 
  viewLinkClicked() {
    this.addLinkActive = true;
    this.route.navigate(['/erp/temp/students']);
  }
}
