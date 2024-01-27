import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { HighersecschoolTeachersComponent } from './components/highersecschool-teachers/highersecschool-teachers.component';
import { MiddleschoolTeachersComponent } from './components/middleschool-teachers/middleschool-teachers.component';
import { PrimaryschoolTeachersComponent } from './components/primaryschool-teachers/primaryschool-teachers.component';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card'
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TeachersRoutingModule } from './teachers.routing.module';
import { HighschoolTeachersComponent } from './components/highschool-teachers/highschool-teachers.component';
import { FirtsStdTeachersComponent } from './components/primaryschool-teachers/components/firts-std-teachers/firts-std-teachers.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
    declarations: [
        TeachersComponent,
        HighersecschoolTeachersComponent,
        HighschoolTeachersComponent,
        MiddleschoolTeachersComponent,
        PrimaryschoolTeachersComponent,
        FirtsStdTeachersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        TableModule,
        PaginatorModule,
        TeachersRoutingModule
    ],
    bootstrap: [],
    providers:[]
  })
  export class TeachersModule { }
  