import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface iUser{
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private userService: UserService) { }

  userSignUpData: iUser;

  ngOnInit(): void {
    this.userSignUpData = this.userService.getSignUpData();
  }

}
