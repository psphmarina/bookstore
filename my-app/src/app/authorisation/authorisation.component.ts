import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './../User'
import { Router } from '@angular/router';
import { AuthorisationService } from "./authorisation.service";

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.less'],
  providers: [HttpClient]
})
export class AuthorisationComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router, private authService: AuthorisationService) { }

  // верхнее не там
  users: Array<User> = [];
  receivedData: User;
  done: boolean = false;
  //user: User;
  str: string;
  ngOnInit() {
  }

  submit(username: string, password: string) {
    if (!password || !username){
      alert("заполните поля");
      return;
    }
    console.log(username, password)
    let user = new User(username, password)
    console.log(user)
    this.http.post('http://localhost:5001/user/auth', user).subscribe(
      (data:User) => {
        localStorage.setItem("token", data.token)
        localStorage.setItem("isAdmin", data.admin.toString())
        console.log(localStorage)
        this.authService.login()
        location.reload();
        this.router.navigate(['']);}
    );
  }

}