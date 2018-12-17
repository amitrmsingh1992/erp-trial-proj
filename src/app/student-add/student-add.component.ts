import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  private pageInfo: string;
  public incompleteInfoFlag: boolean;
  private class: string;
  private status: string;
  private dob: string;
  private school: string;
  private division: string;
  private fname: string;
  private age: number;

  constructor(private route: ActivatedRoute) {
    this.status = 'Active';
    this.incompleteInfoFlag = true;
    this.route.params.subscribe(params => {
      this.pageInfo = params.pageId;
    });
  }


  ngOnInit() {
    let x = this.route.snapshot;
    this.resetForm();
    console.log('students page', this.route.snapshot.params.id)
  }

  // for adding data
  onSubmit() {
    let studentInfo = [];
    // let uniqueStudentEntryFlag = true;
    if (JSON.parse(localStorage.getItem('studentData'))) {
      studentInfo = JSON.parse(localStorage.getItem('studentData'));
    }

    let data = {
      class: this.class,
      status: this.status,
      dob: this.dob,
      age: this.age,
      school: this.school,
      div: this.division,
      name: this.fname,
    }

    studentInfo.push(data)
    localStorage.setItem('studentData', JSON.stringify(studentInfo));
    this.resetForm();

  }


  resetForm() {
    this.class = 'Select';
    this.status = 'Active';
    this.dob = '';
    this.school = 'Select';
    this.division = 'Select';
    this.fname = '';
  }
}
