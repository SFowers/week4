import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Project Server';

  //constructor(private authService:AuthService) {}
  //private authService = inject(AuthService);

  logOut(event:any) {
    //this.authService.logout(event);
  }
}
