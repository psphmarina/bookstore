import { Component } from '@angular/core';
import { AuthorisationService } from "../authorisation/authorisation.service";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private authService: AuthorisationService) { }

loggedIn = false;
  isAdmin = false;
  	  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin') == 'true'
    
    if (localStorage.getItem('token') != null){
      this.loggedIn = true;
      console.log(this.loggedIn.toString())
    };
  }

  logout(){
    this.authService.logout();
    this.loggedIn = false;
  }	   
  
}
