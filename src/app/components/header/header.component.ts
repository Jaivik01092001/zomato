import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  zomatoUserData: any;

  ngOnInit() {
    this.loadUserDataFromLocalStorage();
  }

  loadUserDataFromLocalStorage() {
    const zomatoUserDataStr = localStorage.getItem('zomato_user');
    if (zomatoUserDataStr) {
      this.zomatoUserData = JSON.parse(zomatoUserDataStr);
    }
  }

  logout() {
    // Remove user data from local storage
    localStorage.removeItem('zomato_user');
    // Set zomatoUserData to null
    this.zomatoUserData = null;
    this.router.navigate(['']);
  }
}
