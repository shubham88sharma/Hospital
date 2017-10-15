import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-people',
  template: `
  <input #newHero
  (keyup.enter)="addHero(newHero.value)"
  (blur)="addHero(newHero.value); newHero.value='' ">  

<button (click)="addHero(newHero.value)">Add</button>

<ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `,
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit 
{
  heroes = ['Shubham', 'Sharma'];
  addHero(newHero: string) 
  {
    if (newHero) 
    {
      this.heroes.push(newHero);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
