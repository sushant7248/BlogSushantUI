import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';
import { User } from '../../../features/auth/models/user.model';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user?: User;



  constructor(private router: Router, private authService: AuthService) {
    
    {
      this.authService.user().subscribe(user => {
        this.user = user;
      });

    }
    
  }

  onLogin(): void {
    
    this.router.navigate(['admin/features/login']);
  }

  

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
 
}



