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

  newFavorite: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    console.log('form saved')
  }

  addFavorite(): void {
    const newGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newFavorite
    }

    this.person.favorites.push({...newGame});
    this.newFavorite = '';
  }

  deleteFavorite(index: number): void {
    this.person.favorites.splice(index, 1);
  }

}
