import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clientName: string = 'Procopio';

  //style binding
  appliedCSSClass = 'blue';
  notAppliedCSSClass = true;
  myColor = 'blue';

  //Two-way data binding
  myName = '';

  //Event binding
  message = '';

  onButtonClick() {
    this.message = 'Button was clicked!';
  }

  num1: number;
  num2: number;
  result: number;

  calculateSum() {
    this.result = this.num1 + this.num2;
  }

  //ngIf Demo
  showElement = false;

  //ngFor

  num = ['Item 1'];

  items2 = [
    { name: 'Zac', city: 'Balibago', school: 'HAU' },
    
  ];

  //ngSwitch
  selectedOption = 1;
}
