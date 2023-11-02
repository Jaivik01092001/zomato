import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-foods',
  templateUrl: './restaurant-foods.component.html',
  styleUrls: ['./restaurant-foods.component.css'],
})
export class RestaurantFoodsComponent {
  currentCategoryId: number = 0;
  restaurantList: any[] = [];
  constructor(
    private actiavtedRoute: ActivatedRoute,
    private router: Router,
    private food: FoodService
  ) {
    this.actiavtedRoute.params.subscribe((res: any) => {
      this.currentCategoryId = res.id;
      this.GetRestaurantServingByCategoryId();
    });
  }

  GetRestaurantServingByCategoryId() {
    this.food
      .GetRestaurantServingByCategoryId(this.currentCategoryId)
      .subscribe((res: any) => {
        this.restaurantList = res.data;
        // console.log(this.restaurantList);
      });
  }
}
