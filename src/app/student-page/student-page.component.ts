import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableStructure } from './../../assets/data';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
  
export class StudentPageComponent implements OnInit {
  public dataFlag: boolean;
  public tableInfo: any;
  private studentInfo: any;
  private presentTableData: any;
  private class: string;
  private age: number;
  private school: string;
  private division: string;
  private fname: string;
  private tableHeader: any;
  private numbers: any;

  constructor(private route: Router) {
    this.studentInfo = [];
    this.presentTableData = [];
  }


  ngOnInit() {
    this.tableInfo = tableStructure;
    this.tableHeader = ['ID', 'Name', 'Age', 'School', 'Class', 'Division', 'Status', 'Action'];
    this.dataFlag = this.studentInfo.length === 0 ? false : true;
    if (JSON.parse(localStorage.getItem('studentData'))) {
      this.studentInfo = JSON.parse(localStorage.getItem('studentData'));
    }
    for (const iterator of this.studentInfo) {
      if (this.presentTableData.length < 8) {
        this.presentTableData.push(iterator)
      }
    }
    this.numbers = Array(Math.ceil(this.studentInfo.length / 8)).fill(0).map((x, i) => i+1);
  }

  sendEditableData(item, index) {
    let data = {
      name: item.name,
      dob: item.dob,
      class: item.class,
      division: item.division,
      status: item.status,
      school: item.school
    }
    this.route.navigate(['/erp/temp/students/edit/:id', {
      id: index,
      name: item.name,
      dob: item.dob,
      class: item.class,
      division: item.division,
      status: item.status,
      school: item.school} ])
  }

  // for delete of data
  deleteData(index) {
    this.presentTableData.splice(index, 1);
    localStorage.setItem('studentData', JSON.stringify(this.presentTableData));
  }

  // for pagination functionality
  showPaginatedData(index) {
    console.log(index);
    this.presentTableData = [];
    let tempData = this.studentInfo;
    this.presentTableData = tempData.slice((index - 1) * 7, 8);
  }

// search mechanism part left
  dataFinder() {
    // this.presentTableData = [];
    // if (this.fname || this.age || this.class || this.division || this.school) {
      
    // } else {
    //   let tempData = this.studentInfo;
    //   this.presentTableData = tempData.slice(0, 8);
    //   this.numbers = Array(Math.ceil(this.studentInfo.length / 8)).fill(0).map((x, i) => i + 1);
    // }
  }
  
  generateExcelReport() {
  /* generate worksheet */
    let HeaderInfo = ['Name', 'Age', 'School', 'Class', 'Division', 'Status']
    let data = [HeaderInfo]; 
    for (const iterator of this.studentInfo) {
      let restData = [iterator.name, iterator.age, iterator.school, iterator.class, iterator.division, iterator.status];
      data.push(restData);
    }

    
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);


    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS'+ new Date().getTime() +'.xlsx');
  }

}
