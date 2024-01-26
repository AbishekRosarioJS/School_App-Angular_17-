import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  providers:[AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formdata ={name:"",email:"",password:""}
  submit=false;
  errorMessage="";
  loading=false;

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }
  
  onSubmit(){
  //  console.log(this.formdata);
      this.loading=true;

  //call register service
       this.auth.register(this.formdata.name,this.formdata.email,this.formdata.password)
      .subscribe({
      next:data=>{
      //store token from response data
      this.auth.storeToken(data.idToken);
      console.log('Register idToken is:' +data.idToken);
      this.auth.canAuthenticate();
    },
    error:data=>{
      if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage ="Invalid Email!";
      }
      else if(data.error.error.message=="EMAIL_EXISTS"){
        this.errorMessage ="Already Email Exists!"
      }
      else{
        this.errorMessage="Unkown Error occured "
      }
    }
   })
   .add(()=>{
     this.loading=false;
     console.log('Register Completed!');
   })
  }

}

