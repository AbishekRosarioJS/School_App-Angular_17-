import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FirstStdStudentsComponent } from './students/components/primaryschool-students/components/first-std-students/first-std-students.component';
import { SecondStdStudentsComponent } from './students/components/primaryschool-students/components/second-std-students/second-std-students.component';
import { ThirdStdStudentsComponent } from './students/components/primaryschool-students/components/third-std-students/third-std-students.component';
import { FourthStdStudentsComponent } from './students/components/primaryschool-students/components/fourth-std-students/fourth-std-students.component';
import { FifthStdStudentsComponent } from './students/components/primaryschool-students/components/fifth-std-students/fifth-std-students.component';
import { FirtsStdTeachersComponent } from './teachers/components/primaryschool-teachers/components/firts-std-teachers/firts-std-teachers.component';
import { SecondStdTeachersComponent } from './teachers/components/primaryschool-teachers/components/second-std-teachers/second-std-teachers.component';
import { ThirdStdTeachersComponent } from './teachers/components/primaryschool-teachers/components/third-std-teachers/third-std-teachers.component';
import { FourthStdTeachersComponent } from './teachers/components/primaryschool-teachers/components/fourth-std-teachers/fourth-std-teachers.component';
import { FifthStdTeachersComponent } from './teachers/components/primaryschool-teachers/components/fifth-std-teachers/fifth-std-teachers.component';
import { SixStdStudentsComponent } from './students/components/middleschool-students/components/six-std-students/six-std-students.component';
import { SeventhStdStudentsComponent } from './students/components/middleschool-students/components/seventh-std-students/seventh-std-students.component';
import { EightthStdStudentsComponent } from './students/components/middleschool-students/components/eightth-std-students/eightth-std-students.component';
import { NinethStdStudentsComponent } from './students/components/highschool-students/components/nineth-std-students/nineth-std-students.component';
import { TenthStdStudentsComponent } from './students/components/highschool-students/components/tenth-std-students/tenth-std-students.component';
import { EleventhStdStudentsComponent } from './students/components/highersecschool-students/components/eleventh-std-students/eleventh-std-students.component';
import { TwelfthStdStudentsComponent } from './students/components/highersecschool-students/components/twelfth-std-students/twelfth-std-students.component';
import { SixthStdTeachersComponent } from './teachers/components/middleschool-teachers/components/sixth-std-teachers/sixth-std-teachers.component';
import { SeventhStdTeachersComponent } from './teachers/components/middleschool-teachers/components/seventh-std-teachers/seventh-std-teachers.component';
import { EighthStdTeachersComponent } from './teachers/components/middleschool-teachers/components/eighth-std-teachers/eighth-std-teachers.component';
import { NinethStdTeacherComponent } from './teachers/components/highschool-teachers/components/nineth-std-teacher/nineth-std-teacher.component';
import { TenthStdTeachersComponent } from './teachers/components/highschool-teachers/components/tenth-std-teachers/tenth-std-teachers.component';
import { EleventhStdTeachersComponent } from './teachers/components/highersecschool-teachers/components/eleventh-std-teachers/eleventh-std-teachers.component';
import { TwelfthStdTeachersComponent } from './teachers/components/highersecschool-teachers/components/twelfth-std-teachers/twelfth-std-teachers.component';

const routes: Routes = [
  {path:'',redirectTo:"login", pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'first-std',component:FirstStdStudentsComponent},
  {path:'second-std',component:SecondStdStudentsComponent},
  {path:'third-std',component:ThirdStdStudentsComponent},
  {path:'fourth-std',component:FourthStdStudentsComponent},
  {path:'fifth-std',component:FifthStdStudentsComponent},
  {path:'sixth-std-students',component:SixStdStudentsComponent},
  {path:'seventh-std-students',component:SeventhStdStudentsComponent},
  {path:'eighth-std-students',component:EightthStdStudentsComponent},
  {path:'nineth-std-students',component:NinethStdStudentsComponent},
  {path:'tenth-std-students',component:TenthStdStudentsComponent},
  {path:'elventh-std-students',component:EleventhStdStudentsComponent},
  {path:'tewlfith-std-students',component:TwelfthStdStudentsComponent},
  {path:'first-std-teachers',component:FirtsStdTeachersComponent},
  {path:'second-std-teachers',component:SecondStdTeachersComponent},
  {path:'third-std-teachers',component:ThirdStdTeachersComponent},
  {path:'fourth-std-teachers',component:FourthStdTeachersComponent},
  {path:'fifth-std-teachers',component:FifthStdTeachersComponent},
  {path:'sixth-std-teachers',component:SixthStdTeachersComponent},
  {path:'seventh-std-teachers',component:SeventhStdTeachersComponent},
  {path:'eighth-std-teachers',component:EighthStdTeachersComponent},
  {path:'nineth-std-teachers',component:NinethStdTeacherComponent},
  {path:'tenth-std-teachers',component:TenthStdTeachersComponent},
  {path:'elventh-std-teachers',component:EleventhStdTeachersComponent},
  {path:'tewlfith-std-teachers',component:TwelfthStdTeachersComponent},
  
  {
    path:"dashboard",
    loadChildren:() =>import('../app/students/students.moudle').then(m=>m.StudentsModule)
  },
  {
    path:"teachers/dashboard",
    loadChildren:() =>import('../app/teachers/teachers.moudle').then(m=>m.TeachersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
