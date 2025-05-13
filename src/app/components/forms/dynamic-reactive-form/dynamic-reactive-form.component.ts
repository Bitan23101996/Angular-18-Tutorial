import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-form',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [],
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrl: './dynamic-reactive-form.component.scss',
})
export class DynamicReactiveFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  dynamicFormFields: any[] = [];

  //Data Came From Backend API - Future
  prepopulatedData = {
    username: 'john_doe',
    gender: 'F',
    country: 'US',
    subscribe: true,
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    //If data came from static json / API call
    this.http.get<any[]>('assets/json/mock-dynamic-form.json').subscribe(fields => {
      this.dynamicFormFields = fields; //assign the whole array
      this.createDynamicForm(fields); //pass the array
      this.dynamicForm.patchValue(this.prepopulatedData); //Patch prepopulated values after form is created
    });
  }

  //Create dynamic Form using FormBuilder
  createDynamicForm(fields: any[]) {
    const controls = fields.reduce((group, field) => {
      group[field.key] = [field.value];
      return group;
    }, {} as { [key: string]: any[] });

    this.dynamicForm = this.fb.group(controls);
  }

  //When save the form value
  onSubmit() {
    console.log('Submitted Form Value:', this.dynamicForm.value);
  }
}
