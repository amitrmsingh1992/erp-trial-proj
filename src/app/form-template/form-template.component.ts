import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  @Output() loginDetail = new EventEmitter<Object>();
  private formHeader: string;
  public forgetPasswordFlag: boolean;
  
  constructor(private route: ActivatedRoute) { 
    this.forgetPasswordFlag = false;
  }

  ngOnInit() {
    if (this.route.routeConfig.path === 'erp/temp/login') {
      this.formHeader = "Login to your Account";
      this.forgetPasswordFlag = true;
    } else {
      this.formHeader = "Create your Account";
    }
  }

  onSubmit = (id, pw) => {
    this.loginDetail.emit({ 'id': id, 'password': pw });
  }
}
