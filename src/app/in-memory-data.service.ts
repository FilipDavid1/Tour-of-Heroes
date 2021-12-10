import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from "./item";
import { Items } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', money: 100, items: [Items[7], Items[0]] },
      { id: 12, name: 'Narco', money: 10000, items: [Items[1], Items[5]] },
      { id: 13, name: 'Bombasto', money: 10000000000, items: [Items[9], Items[2]] },
      { id: 14, name: 'Celeritas', money: 10000, items: [Items[6], Items[1]] },
      { id: 15, name: 'Magnete', money: 10000, items: [Items[7], Items[0]] },
      { id: 16, name: 'RubberMan', money: 10000, items: [Items[5], Items[8]] },
      { id: 17, name: 'Dynama', money: 10000, items: [Items[4], Items[7]] },
      { id: 18, name: 'Dr IQ', money: 10000, items: [Items[9], Items[2]] },
      { id: 19, name: 'Magma', money: 10000, items: [Items[1], Items[0]] },
      { id: 20, name: 'Tornado', money: 10000, items: [Items[8], Items[9]] },

    ];
    const items = [
      {id: 11, name: 'Frying pan', price: 1500, isAvailable: true},
      {id: 12, name: 'Wrench', price: 210, isAvailable: true},
      {id: 13, name: 'Shotgun', price: 5900, isAvailable: true},
      {id: 14, name: 'Telescopic pole', price: 160, isAvailable: true},
    ];
    return {heroes, items};
  }

  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11 && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }
  

  
}
