import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  //pass & confirm pass same or not
  isBothPasswordSame: boolean = false;
  
  //form Object
  registerObj = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isTermChecked: false,
  };

  //check if password & confirm password are same or not
  checkPassAndConfirmPassSame(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      this.isBothPasswordSame = true;
    } else {
      this.isBothPasswordSame = false;
    }
  }

  //submit form
  submitForm() {
    let formValue = this.registerObj;
    console.log('Form Value:', formValue);
  }
}
