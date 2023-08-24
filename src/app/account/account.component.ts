import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userid = sessionStorage.getItem('userid');
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('userbirthdate');
  userage = sessionStorage.getItem('userage');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this.email = this.route.snapshot.params['email'];
    //console.log(this.route.snapshot.params);
    /*
    this.route.paramMap.subscribe(
      params => {this.email = params.get('email');}
    );
    */
  }

  saveToStorage() {
    /*
    sessionStorage.setItem('userid', this.userid.toString());
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('userbirthdate', this.userbirthdate);
    sessionStorage.setItem('userage', this.userage.toString());
    */
  }
}
