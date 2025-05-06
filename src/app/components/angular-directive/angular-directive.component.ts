import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityModel } from '../../models/city.model';
import { StudentModel } from '../../models/student.model';
import { TableHeadingModel } from '../../models/table-headding.model';

@Component({
  selector: 'app-angular-directive',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-directive.component.html',
  styleUrl: './angular-directive.component.scss',
})
export class AngularDirectiveComponent implements OnInit {
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
  //table heading
  tableHeadingList: TableHeadingModel[] = [
    {
      isActive: true,
      isDisplay: 'Y',
      title: 'Student Name',
      uid: '1',
    },
    {
      isActive: true,
      isDisplay: 'Y',
      title: 'Age',
      uid: '2',
    },
    {
      isActive: true,
      isDisplay: 'Y',
      title: 'Department',
      uid: '3',
    },
    {
      isActive: true,
      isDisplay: 'Y',
      title: 'Score',
      uid: '4',
    },
    {
      isActive: true,
      isDisplay: 'N',
      title: 'Course',
      uid: '5',
    },

    {
      isActive: true,
      isDisplay: 'Y',
      title: 'Hobby',
      uid: '6',
    },
  ];

  //list of student
  studentList: StudentModel[] = [
    {
      name: 'Alice',
      age: 20,
      major: 'Computer Science',
      gpa: 3.8,
      courses: ['Data Structures', 'Algorithms'],
      hobbies: ['Coding', 'Reading'],
    },
    {
      name: 'Bob',
      age: 21,
      major: 'Electrical Engineering',
      gpa: 3.5,
      courses: ['Circuits', 'Digital Systems'],
      hobbies: ['Guitar', 'Hiking'],
    },
    {
      name: 'Charlie',
      age: 19,
      major: 'Mathematics',
      gpa: 3.2,
      courses: ['Calculus', 'Linear Algebra'],
      hobbies: ['Chess', 'Piano'],
    },
    {
      name: 'David',
      age: 22,
      major: 'Physics',
      gpa: 3.9,
      courses: ['Quantum Mechanics', 'Thermodynamics'],
      hobbies: ['Stargazing', 'Photography'],
    },
    {
      name: 'Eva',
      age: 20,
      major: 'Biology',
      gpa: 3.6,
      courses: ['Genetics', 'Ecology'],
      hobbies: ['Hiking', 'Painting'],
    },
    {
      name: 'Frank',
      age: 23,
      major: 'History',
      gpa: 3.0,
      courses: ['World Wars', 'Ancient Civilizations'],
      hobbies: ['Archaeology', 'Travel'],
    },
    {
      name: 'Grace',
      age: 21,
      major: 'Psychology',
      gpa: 3.7,
      courses: ['Cognitive Neuroscience', 'Abnormal Psychology'],
      hobbies: ['Yoga', 'Meditation'],
    },
    {
      name: 'Henry',
      age: 20,
      major: 'Chemistry',
      gpa: 3.4,
      courses: ['Organic Chemistry', 'Physical Chemistry'],
      hobbies: ['Cooking', 'Gardening'],
    },
    {
      name: 'Isabel',
      age: 22,
      major: 'English Literature',
      gpa: 3.8,
      courses: ['Shakespeare', 'Modern Poetry'],
      hobbies: ['Writing', 'Theater'],
    },
    {
      name: 'Jack',
      age: 21,
      major: 'Business Administration',
      gpa: 3.3,
      courses: ['Marketing', 'Financial Management'],
      hobbies: ['Entrepreneurship', 'Golf'],
    },
  ];

  //display data for hobby in table
  displayHobbyField = false;
  //display data for course in table
  displayCourseField = false;

  constructor(){

  }

  ngOnInit(){
    this.isFieldDisplay();
  }

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

  toggleCityDropdown() {
    this.isCityChecked = !this.isCityChecked;
    this.isSpecialCity = '';
  }

  isFieldDisplay() {
    if (this.tableHeadingList.length > 0) {
      for (let i = 0; i < this.tableHeadingList.length; i++) {
        if (this.tableHeadingList[i].isDisplay === 'Y') {
          switch (this.tableHeadingList[i].uid) {
            case '5': {
              this.displayCourseField = true;
              break;
            }
            case '6': {
              this.displayHobbyField = true;
              break;
            }
          }
        }
      }
    }
  }
}
