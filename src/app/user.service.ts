import { Injectable } from '@angular/core';

interface iUser{
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  signUpData: iUser;

  setSignUpData(user: iUser){
    this.signUpData = user;
  }

  getSignUpData(){
    return this.signUpData;
  }

}
