import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private food: FoodService, private router: Router) {}
  loggedUserData: any;
  loginObj: any = {
    userName: '',
    password: '',
  };
  login(registerObj: any) {
    this.food.onLogin(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login Success');
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggedUserData = res.data;
        this.router.navigate(['']);
      } else {
        alert(res.message);
      }
    });
  }
}
