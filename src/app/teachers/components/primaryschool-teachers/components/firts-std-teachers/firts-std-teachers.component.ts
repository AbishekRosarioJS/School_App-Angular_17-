import { Component } from '@angular/core';
import { SchoolService } from '../../../../../services/school.service';


@Component({
  selector: 'app-firts-std-teachers',
  templateUrl: './firts-std-teachers.component.html',
  styleUrl: './firts-std-teachers.component.css'
})
export class FirtsStdTeachersComponent {
  private APIBaseLink: string = '';
  users: any[] = [];
  newUser: any = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' }; // Initialize newUser here

  constructor(private schoolService: SchoolService) {
    this.APIBaseLink = this.schoolService.baseLink;
  }

  ngOnInit(){
     this.onGetStudentList();
  }

  onGetStudentList(){
    const UrlLink:any = `${this.APIBaseLink}api/user/list`;
    this.schoolService.onGetMethodSync(UrlLink).subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    });  
  }

  createUser() {
    const createUserUrl: string = `${this.APIBaseLink}api/user/create`;
    this.schoolService.onPostMethodSync(createUserUrl, this.newUser).subscribe((response: any) => {
      console.log(response);
      this.newUser = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' }; // Reset the newUser object
      this.onGetStudentList();
    });
  }
}