import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router: Router) {}
  logOut() {
    sessionStorage.setItem('userid', "");
    sessionStorage.setItem('username', "");
    sessionStorage.setItem('userbirthdate', "");
    sessionStorage.setItem('userage', "");

    this.router.navigateByUrl('/');
  }
}
