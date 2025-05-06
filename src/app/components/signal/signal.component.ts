import { Component, computed, signal } from '@angular/core';
import { CityModel } from '../../models/city.model';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  //use firstName & lastName as signal - signal initilize
  firstName = signal<string>('Ryan');
  lastName = signal<string>('Das');

  fullName = computed(() => this.firstName() + ' ' + this.lastName());
  //roll initilize
  roll = signal<number>(0);

  //use of array data type as signal
  cityList = signal(['Mumbai', 'Delhi']);

  //use of object data type as signal
  cityObj = signal({
    cityName: 'Kolkata',
    cityId: '1',
    isActive: true,
    isSpecial: 'Y',
  });
  /* cityList = signal<CityModel[]>([
    {
      cityName: 'Kolkata',
      cityId: '1',
      isActive: true,
      isSpecial: 'Y',
    },
  ]); */
  //constructor
  constructor() {
    // change signal value after 5 sec
    setTimeout(() => {
      //set value in signal
      this.roll.set(10);
    }, 5000);
  } //end of constructor

  //add new city
  addNewCity() {
    let newCity = 'Kolkata';
    /* let newCity = {
      cityName: 'Mumbai',
      cityId: '2',
      isActive: true,
      isSpecial: 'Y',
    }; */
    //set new city with cityList array
    this.cityList.set([...this.cityList(), newCity]);
  }

  //change first Name
  changeFirstName() {
    this.firstName.set('Sachin');
  }
  //change last Name
  changeLastName() {
    this.lastName.set('Tendulkar');
  }

  //change name of the city
  changeCityName() {
    this.cityObj.set({ ...this.cityObj(), cityName: 'Delhi' });
  }
}
