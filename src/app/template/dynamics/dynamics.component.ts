import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {

  person: Person = {
    name: 'John',
    favorites: [
      {
        id: 1,
        name: 'RDR2'
      },
      {
        id: 2,
        name: 'CSGO'
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    console.log('form saved')
  }

}
