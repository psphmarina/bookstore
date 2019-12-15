import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './../User'
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [HttpClient]
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  // верхнее не там
  users: Array<User> = [];
  receivedData: User;
  done: boolean = false;
  //user: User;
  str: string;
  ngOnInit() {
  }

  submit(username: string, password: string, passwordrepeat: string) {
    if (password != passwordrepeat){
      alert("пароли не совпадают");
      return;
    }
    if (!password || !username){
      alert("заполните поля");
      return;
    }
    console.log(username, password)
    let user = new User(username, password)
    console.log(user)
    this.http.post('http://localhost:5001/user/registration', user).subscribe(
      (data:User) => {this.router.navigate(['/home'])});
  }
}