import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  newFood = { name: '', calories: 0, image: ''};
  addFood = false;
  foods = [];

  onSubmit() {
    this.addFood = false;
    this.newFood = { name: '', calories: 0, image: ''};
    
  }
}
