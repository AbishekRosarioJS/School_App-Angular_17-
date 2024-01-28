import { Component } from '@angular/core';
import { SchoolService } from '../../../../../services/school.service';
import { ToastrService } from 'ngx-toastr';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firts-std-teachers',
  templateUrl: './firts-std-teachers.component.html',
  styleUrls: ['./firts-std-teachers.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class FirtsStdTeachersComponent {
  private APIBaseLink: string = '';
  users: any[] = [];
  newUser: any = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' }; 

  constructor(private schoolService: SchoolService, private toastr: ToastrService,private router: Router) {
    this.APIBaseLink = this.schoolService.baseLink;
  }

  ngOnInit(){
     this.onGetStudentList();
  }

  onGetStudentList(){
    const UrlLink: any = `${this.APIBaseLink}api/user/list`;
    this.schoolService.onGetMethodSync(UrlLink).subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });  
  }

  createUser() {
    if (this.isFormValid()) {
      const createUserUrl: string = `${this.APIBaseLink}api/user/create`;
      this.schoolService.onPostMethodSync(createUserUrl, this.newUser).subscribe((response: any) => {
        console.log(response);
        this.clearForm();
        this.onGetStudentList();
        this.toastr.success('Student record created successfully!');
        this.router.navigate(['/first-std']);
      });
    } else {
      this.toastr.error('Please fill out all required fields!');
    }
  }

  isFormValid(): boolean {
    return (
      this.newUser.first_name &&
      this.newUser.last_name &&
      this.newUser.class &&
      this.newUser.sec &&
      this.newUser.age &&
      this.newUser.location
    );
  }

  clearForm(): void {
    this.newUser = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' };
  }
}
