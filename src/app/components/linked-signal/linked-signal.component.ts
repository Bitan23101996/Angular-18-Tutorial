import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {

  firstName = signal<string>("Bitan");
  lastName = signal<string>("");

  /* fullName = linkedSignal({
    source
  }) */
}
