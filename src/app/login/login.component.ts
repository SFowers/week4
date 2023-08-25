import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errormsg = "";
  newuser:User = new User();
  email:string = "";
  pwd:string = "";
  loggedin:boolean = false;

  //private router = inject(Router);
  //private authService = inject(AuthService);
  constructor(private router:Router, private authService:AuthService) {}

  ngOnInit() {
    if(sessionStorage.getItem('currentUser')) {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }

  signin(event:any) {
    console.log('at signin' + this.email + this.pwd);
    event.preventDefault();
    this.authService.login(this.email, this.pwd).subscribe({
      next:
        (data)=>{
          if(data.valid == true) {
            this.newuser = new User(data.username, data.email);
            this.authService.setCurrentUser(this.newuser);
            this.router.navigate(['/home']);
          } else {
            this.errormsg = "there is a problem with your login information.";
          }
          error:
            this.errormsg = "There is a problem with your login information.";
        }
    })
  }
}

//import { UserDetailsService } from '../services/user-details.service';
/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};

import { NgForm } from '@angular/forms';
import { Userpwd } from '../userpwd';
import { Userobj } from '../userobj';
import { USERPWDS } from '../mock-users';
*/
//const BACKEND_URL = 'http://localhost:3000';

  //userpwd: Userpwd = {username: 's@griffith.com', pwd: '123'};
  //userobj: Userobj = {userid: 1, username: this.userpwd.username, userbirthdate: null, userage: 100};
  //constructor(private router: Router, private httpClient: HttpClient) {}
 /*
  public loginFunc() {
    this.httpClient.post(BACKEND_URL + '/login', this.userpwd, httpOptions)
      .subscribe((data: any) => {
        alert(JSON.stringify(this.userpwd));
        if(data.ok) {
          sessionStorage.setItem('userid', this.userobj.userid.toString());
          sessionStorage.setItem('username', this.userobj.username);
          sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate);
          sessionStorage.setItem('userage', this.userobj.userage.toString());
          this.httpClient.post<Userobj[]>(BACKEND_URL + '/loginafter', this.userobj, httpOptions)
          .subscribe((m: any) => {console.log(m[0]);});
          this.router.navigateByUrl('account');
        } else {
          alert('Sorry, username or password is not valid');
        }
      })
    
  }
  */
    /*
    email:string = "";
    password:string = "";

    users = {username:String,
      birthdate:String,
      age:Number,
      email:String,
      password:String,
      valid:Boolean};


    //usernames = [{email:'abc', password:'123'}, {email:'def@gmail.com', password:'123'}, {email:'ghi@gmail.com', password:'123'}];

    constructor(private router: Router) {}

    login() {
      var confirmedUser = 0;
      for(let i = 0; i < 3; i++) {
        //if(this.usernames[i].email == this.users. && this.usernames[i].password == this.password) {
        //  confirmedUser = 1;
        //}
      }
      if(confirmedUser) {
        //this.router.navigateByUrl('/account' );
        //*this.router.navigateByUrl('/account/' + this.email);
      } else {
        alert("Error: Login Details do not match.");
      }
      
    }
    */
    /*
    setItem() {
      this.userDetailsService.setItem(this.email, this.password);
      console.log(this.userDetailsService.jsonItems);
    }
    */
