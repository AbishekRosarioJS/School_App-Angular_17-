import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ThirdStdStudentsComponent } from './components/primaryschool-students/components/third-std-students/third-std-students.component';
import { FourthStdStudentsComponent } from './components/primaryschool-students/components/fourth-std-students/fourth-std-students.component';
import { FifthStdStudentsComponent } from './components/primaryschool-students/components/fifth-std-students/fifth-std-students.component';

const routes: Routes = [
 {
  path:"",
  component:StudentsComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsRoutingModule { }
