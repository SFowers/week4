import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  email:string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
    console.log(this.route.snapshot.params);
    /*
    this.route.paramMap.subscribe(
      params => {this.email = params.get('email');}
    );
    */
  }
}
