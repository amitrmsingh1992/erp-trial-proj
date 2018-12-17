import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';

const routes: Routes = [
  {
    path: 'erp/temp/login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'erp/temp/login',
    pathMatch: 'full'
  },
  {
    path: 'erp/temp/signup',
    component: SignupComponent
  },
  {
    path: 'erp/temp/get-password',
    component: SignupComponent
  },
  {
    path: 'erp/temp/students/edit/:data',
    component: StudentEditComponent
  },
  {
    path: 'erp/temp/students',
    component: StudentPageComponent
  },
  {
    path: 'erp/temp/students/add',
    component: StudentAddComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FormTemplateComponent,
    StudentPageComponent,
    NavComponentComponent,
    StudentEditComponent,
    StudentAddComponent,
    SideBarComponent,
    StudentEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule, BrowserAnimationsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
