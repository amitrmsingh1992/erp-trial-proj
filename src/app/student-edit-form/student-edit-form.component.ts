import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { tableStructure } from './../../assets/data';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.scss']
})
export class StudentEditFormComponent implements OnInit {
  @Input() editableData;

  public tableInfo: any;
  private class: string;
  private status: any;
  private dob: string;
  private school: string;
  private division: string;
  private fname: string;
  private Date: any = new Date();
  private formTitle: string;
  constructor(private route: Router) {
    this.status = 'Active';
  }
  
  
  ngOnInit() {

    this.tableInfo = tableStructure
    let x = this.route.routerState.snapshot.url;
    if (x.includes('add')) {
      this.fname = '';
      this.school = 'select';
      this.division = 'select';
      this.dob = '';
      this.class = 'select';
      this.status = 'Active';
      this.formTitle = 'Add Student';
    } else {
      this.formTitle = 'Edit Student Info';
      this.fname = this.editableData.name;
      this.school = this.editableData.school;
      this.division = this.editableData.division;
      this.dob = this.editableData.dob;
      this.class = this.editableData.class;
      this.status = this.editableData.status;
    }
  }

  onSubmit() {
    let studentInfo = [];
    if (!(this.class == '' || this.fname == '' || this.dob == '' || this.class == '' || this.division == '')) {
        if (JSON.parse(localStorage.getItem('studentData'))) {
          studentInfo = JSON.parse(localStorage.getItem('studentData'));
        }
      
        let data = {
          class: this.class,
          status: this.status,
          dob: this.dob,
          age: this.Date.getFullYear() - Number(this.dob.substr(0, 4)),
          school: this.school,
          division: this.division,
          name: this.fname,
        }
      if (this.editableData) {
        studentInfo[this.editableData.id] = data;
      } else {
        studentInfo.push(data);
      }
      localStorage.setItem('studentData', JSON.stringify(studentInfo));
      this.resetForm();
      } else {
        alert('It seems you haven\'t entered all the required input');
    }
  }

  resetForm() {
    this.fname = '';
    this.dob = '';
    this.class = 'select';
    this.school = 'select';
    this.division = 'select';
    this.status = 'Active';
  }
 
}
