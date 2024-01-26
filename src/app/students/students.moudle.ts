import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students.routing.module';
import { HighersecschoolStudentsComponent } from './components/highersecschool-students/highersecschool-students.component';
import { StudentsComponent } from './students.component';
import { PrimaryschoolStudentsComponent } from './components/primaryschool-students/primaryschool-students.component';
import { MiddleschoolStudentsComponent } from './components/middleschool-students/middleschool-students.component';
import { HighschoolStudentsComponent } from './components/highschool-students/highschool-students.component';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card'
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstStdStudentsComponent } from './components/primaryschool-students/components/first-std-students/first-std-students.component';

@NgModule({
  declarations: [
    StudentsComponent,
    NavbarComponent,
    HighersecschoolStudentsComponent,
    PrimaryschoolStudentsComponent,
    MiddleschoolStudentsComponent,
    HighschoolStudentsComponent,
    FirstStdStudentsComponent,
  ],
  imports: [
    StudentsRoutingModule,
    CommonModule,
    CardModule,
    FormsModule,
    TableModule,
    PaginatorModule
  ],
  bootstrap: [],
  providers:[]
})
export class StudentsModule { }
