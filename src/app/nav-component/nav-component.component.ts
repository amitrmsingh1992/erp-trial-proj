import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
  public userName: string;
  public actionDivActive: boolean;
  constructor() { }

  ngOnInit() {
    this.userName = 'Altaf';
    this.actionDivActive = false;
  }

  actionFunction() {
    this.actionDivActive = !this.actionDivActive;
  }

}
