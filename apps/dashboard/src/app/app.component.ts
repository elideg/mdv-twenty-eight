import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-eight/core-data';

@Component({
  selector: 'mdv-twenty-eight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { path: '/tacos', icon: 'work', title: 'Tacos' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
