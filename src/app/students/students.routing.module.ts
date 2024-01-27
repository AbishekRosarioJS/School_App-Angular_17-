import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { SixStdStudentsComponent } from './components/middleschool-students/components/six-std-students/six-std-students.component';
import { SeventhStdStudentsComponent } from './components/middleschool-students/components/seventh-std-students/seventh-std-students.component';
import { EightthStdStudentsComponent } from './components/middleschool-students/components/eightth-std-students/eightth-std-students.component';
import { NinethStdStudentsComponent } from './components/highschool-students/components/nineth-std-students/nineth-std-students.component';
import { TenthStdStudentsComponent } from './components/highschool-students/components/tenth-std-students/tenth-std-students.component';
import { EleventhStdStudentsComponent } from './components/highersecschool-students/components/eleventh-std-students/eleventh-std-students.component';
import { TwelfthStdStudentsComponent } from './components/highersecschool-students/components/twelfth-std-students/twelfth-std-students.component';

const routes: Routes = [
 {
  path:"",
  component:StudentsComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SixStdStudentsComponent,
    SeventhStdStudentsComponent,
    EightthStdStudentsComponent,
    NinethStdStudentsComponent,
    TenthStdStudentsComponent,
    EleventhStdStudentsComponent,
    TwelfthStdStudentsComponent
  ]
})
export class StudentsRoutingModule { }
