import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string = "";
  password:string = "";

  users = [{email:'abc', password:'123'}, 
          {email:'def@gmail.com', password:'123'}, 
          {email:'ghi@gmail.com', password:'123'}];

  constructor(private router: Router) {}

  login() {
    var confirmedUser = 0;
    for(let i = 0; i < 3; i++) {
      if(this.users[i].email == this.email && this.users[i].password == this.password) {
        confirmedUser = 1;
      }
    }
    if(confirmedUser) {
      //this.router.navigateByUrl('/account' );
      this.router.navigateByUrl('/account/' + this.email);
    } else {
      alert("Error: Login Details do not match.");
    }
    
  }
}
