import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityModel } from '../../models/city.model';

@Component({
  selector: 'app-angular-directive',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-directive.component.html',
  styleUrl: './angular-directive.component.scss',
})
export class AngularDirectiveComponent {
  //show/hide flag for div 1
  displayDivOne: boolean = true;
  //toggle flag for div 2
  displayDivTwo: boolean = true;

  //Text 1 field
  text1Value: string = '';
  //Text 2 field
  text2Value: string = '';

  //toggle city checkbox
  isCityChecked: boolean = false;
  //choose city from dropdown
  isSpecialCity: string = '';
  //city array
  cityList: CityModel[] = [
    {
      cityName: 'Kolkata',
      cityId: 'C1',
      isActive: true,
      isSpecial: 'Y',
    },
    {
      cityName: 'Mumbai',
      cityId: 'C2',
      isActive: true,
      isSpecial: 'N',
    },
    {
      cityName: 'Delhi',
      cityId: 'C3',
      isActive: true,
      isSpecial: 'Y',
    },
  ];

  showDivOne() {
    this.displayDivOne = true;
  }
  hideDivOne() {
    this.displayDivOne = false;
  }

  //toggle function for div 2
  toggleDivTwo() {
    this.displayDivTwo = !this.displayDivTwo;
  }

  toggleCityDropdown(){
    this.isCityChecked = !this.isCityChecked;
    this.isSpecialCity = '';
  }
}
