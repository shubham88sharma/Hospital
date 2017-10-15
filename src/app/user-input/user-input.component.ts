import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  template: `
  <h5>write something</h5>

  <input (keyup)="testKey($event)" placeholder="user input way-1">
  <p>{{values}}</p>
  
  <input #box (keyup)="0" placeholder="user input way-2 using #box">
  <p>{{box.value}}</p>

  <input #boxes (keyup.enter)="onEnter(boxes.value)" placeholder="press enter after writing your text">
  <p>{{testing1}}</p>

  `,
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  values = '';
  testing='';
  testing1='';
  testKey(event: any)
  {
    //this.values += event.target.value + '(^_^)';
    this.values = 'TEST(^_^)'+event.target.value;
    
  }

  onKey(value: string) 
  {
    this.values += value + ' | ';
  }

  onEnter(value: string) { this.testing1 = value; }

  constructor() { }

  ngOnInit() {
  }

}
