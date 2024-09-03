import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { StudentModel } from '../../models/student.model';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-angular-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './angular-pipe.component.html',
  styleUrl: './angular-pipe.component.scss',
})
export class AngularPipeComponent implements OnInit {
  //use for upper case pipe
  firstName: string = 'bitan';
  //use for lower case pipe
  lastName: string = 'BITAN';
  //observale with date type - use to show time + date - 1 sec interval
  currentTime: Observable<Date> = new Observable<Date>();
  //use for json pipe
  studentObj: StudentModel = {
    name: '',
    age: 25,
    major: 'Science',
  };

  currentDate: Date = new Date();

  //oninit function call
  ngOnInit(): void {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
  //end of oninit function
}
