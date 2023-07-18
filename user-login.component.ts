import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''

  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor() { }
  ngOnInit(): void {

}
onSignUp() {
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUser',JSON.stringify(this.signupUsers));
}
onLogin() {

}
}
