import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foodCatList: any;
  constructor(private food: FoodService, private router: Router) {}
  ngOnInit() {
    this.getFoodCategory();
  }

  getFoodCategory() {
    this.food.getfoodcategory().subscribe((res: any) => {
      this.foodCatList = res;
      console.log(this.foodCatList);
    });
  }
}
