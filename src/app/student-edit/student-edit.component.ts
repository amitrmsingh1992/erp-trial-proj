import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  public data: any;
  constructor(private route: Router, private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.routeInfo.snapshot.params;
  }

}
