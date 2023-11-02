import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getfoodcategory() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory'
    );
  }
  GetRestaurantServingByCategoryId(foodCategoryId: any) {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId=' +
        foodCategoryId
    );
  }
  GetFoodItemOfRestaurantByCategory(
    restaurantId: number,
    categoryId: number
  ): Observable<any> {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId=' +
        restaurantId +
        '&categoryId=' +
        categoryId
    );
  }

  onRegister(obj: any): Observable<any> {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/zomato/AddNewUser',
      obj
    );
  }
  onLogin(obj: any): Observable<any> {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/zomato/login',
      obj
    );
  }
  addtocart(obj: any): Observable<any> {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/zomato/addtocart',
      obj
    );
  }

  GetCartItemsByCustomerIdForRestaurant(custId: number, resId: number) {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId=' +
        custId +
        '&restaurantId=' +
        resId
    );
  }
  placeOrder(obj: any): Observable<any> {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/zomato/addneworder',
      obj
    );
  }
}
