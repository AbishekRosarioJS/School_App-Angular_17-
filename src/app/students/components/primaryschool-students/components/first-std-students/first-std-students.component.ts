import { Component } from '@angular/core';
import { SchoolService } from '../../../../../services/school.service';

@Component({
  selector: 'app-first-std-students',
  templateUrl: './first-std-students.component.html',
  styleUrls: ['./first-std-students.component.css'],
})
export class FirstStdStudentsComponent {
  private APIBaseLink: string = '';
  users: any[] = [];
  pagedUsers: any[] = [];
  showActionsColumn: boolean = false;
  totalRecords: number = 0;
  rowsPerPageOptions: number[] = [5, 10, 20];
  currentPage: number = 1;
  rowsPerPage: number = 10;
  newUser: any = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' };

  constructor(private schoolService: SchoolService) {
    this.APIBaseLink = this.schoolService.baseLink;
  }

  ngOnInit() {
    this.onGetStudentList();
  }

  addEmptyRow() {
    const emptyUser = {
      editMode: true, 
      first_name: '',
      last_name: '',
      class: '',
      sec: '',
      age: '',
      location: ''
    };
    console.log(emptyUser)
    this.users.push(emptyUser);
    this.createUser(emptyUser);
    this.updatePagedUsers();
  }

  onGetStudentList() {
    const UrlLink: any = `${this.APIBaseLink}api/user/list`;
    this.schoolService.onGetMethodSync(UrlLink).subscribe((data: any) => {
      console.log(data);
      this.users = data;
      this.totalRecords = data.length;
      this.updatePagedUsers();
    });
  }

  createUser(user: any) {
    const createUserUrl: string = `${this.APIBaseLink}api/user/create`;
    this.schoolService.onPostMethodSync(createUserUrl, user).subscribe((response: any) => {
      // console.log(response);
      // this.newUser = { first_name: '', last_name: '', class: '', sec: '', age: '', location: '' };
      // this.onGetStudentList();
    });
  }

  updatePagedUsers() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = Math.min(startIndex + this.rowsPerPage, this.users.length);
    this.pagedUsers = this.users.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.rowsPerPage = event.rows;
    this.updatePagedUsers();
  }

  updateUser(user: any) {
    const updateUrl: string = `${this.APIBaseLink}api/user/edit/${user.id}`;
    this.schoolService
      .onPutMethodSync(updateUrl, user)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  onCheckboxChange(user: any) {
    this.updateUser(user);
    this.showActionsColumn = this.users.some((user) => user.editMode);
  }

  onDelete(user: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      const deleteUserUrl: string = `${this.APIBaseLink}api/user/delete/${user.id}`;
      this.schoolService
        .onDeleteMethodSync(deleteUserUrl)
        .subscribe((data: any) => {
          this.users = this.users.filter((u) => u.id !== user.id);
          this.totalRecords = this.users.length;
          this.currentPage = 1;
          this.showActionsColumn = this.users.some((u) => u.editMode);
          this.updatePagedUsers();
        });
    }
  }
}
