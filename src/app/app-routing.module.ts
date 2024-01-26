import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FirstStdStudentsComponent } from './students/components/primaryschool-students/components/first-std-students/first-std-students.component';
import { SecondStdStudentsComponent } from './students/components/primaryschool-students/components/second-std-students/second-std-students.component';
import { ThirdStdStudentsComponent } from './students/components/primaryschool-students/components/third-std-students/third-std-students.component';
import { FourthStdStudentsComponent } from './students/components/primaryschool-students/components/fourth-std-students/fourth-std-students.component';
import { FifthStdStudentsComponent } from './students/components/primaryschool-students/components/fifth-std-students/fifth-std-students.component';

const routes: Routes = [
  {path:'',redirectTo:"login", pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'first-std',component:FirstStdStudentsComponent},
  {path:'second-std',component:SecondStdStudentsComponent},
  {path:'third-std',component:ThirdStdStudentsComponent},
  {path:'fourth-std',component:FourthStdStudentsComponent},
  {path:'fifth-std',component:FifthStdStudentsComponent},
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
