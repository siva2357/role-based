import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Front-End/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string | null = null;// Variable to hold the username
  userRole: string | null = null;// Variable to hold the username

  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userRole = this.authService.getRole(); // Get role if needed
  }
  

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['app/login']);
  }
  
}
