import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private food: FoodService, private router: Router) {}
  loggedUserData: any;
  registerObj: any = {
    userId: 0,
    userName: '',
    role: 'Customer',
    password: '',
    mobileNo: '',
    emailId: '',
    restaurantId: 0,
  };
  onRegister(registerObj: any) {
    this.food.onRegister(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert('Registration Success');
        localStorage.setItem('zomato_user', JSON.stringify(res.data));
        this.loggedUserData = res.data;
        this.router.navigate(['']);
      } else {
        alert(res.message);
      }
    });
  }
}
