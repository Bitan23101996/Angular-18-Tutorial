import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  firstName = signal<string>('Bitan');
  lastName = signal<string>('Das');

  //Example 1: of linked signal
  fullName = linkedSignal({
    source: this.firstName,
    computation: (newValue: any, previousOptions: any) => {
      const fullName = newValue + ' ' + this.lastName();
      return fullName;
    },
  });

  //Example 2: Use of linked Signal
  user = signal<any>({ userId: 1, userName: 'tapan' });

  getEmail = linkedSignal({
    source: this.user,
    computation: (currentUser, oldUserOption) => {
      debugger
      return `${currentUser.userName}-${currentUser.userId}@gmail.com`;
    },
    equal: (a: any, b: any) => a.userId !== b.userId,
  });

  constructor() {}

  changeFirstName() {
    this.firstName.set('Kurban');
  }

  changeEmail(){
    this.user.set({userId: 4, userName: 'kamini'})
  }
}
