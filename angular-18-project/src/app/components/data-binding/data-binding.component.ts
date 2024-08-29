import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  //hide & show
  isActive: boolean = true;

  // use of for loop
  cityList: string[] = ["Howrah", "Kolkata", "Delhi"];

  //use of Signal
  firstName = signal('Bitan');

  changeFirstNameUsingSignal(text: string) {
    this.firstName.set(text);
  }
  toggleFirstNameUsingSignal(text: string) {
    this.firstName.set(text);
  }
}
