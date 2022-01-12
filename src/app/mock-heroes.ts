import { Hero } from './hero';
import { Items } from './mock-items';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice', money: 10000, items: [Items[7], Items[0]], life: 1500, strenght: 25},
  { id: 12, name: 'Narco', money: 10000, items: [Items[1], Items[5]], life: 250, strenght: 140},
  { id: 13, name: 'Bombasto', money: 10000000000, items: [Items[9], Items[2]], life: 300, strenght: 55},
  { id: 14, name: 'Celeritas', money: 10000, items: [Items[6], Items[1]], life: 100, strenght: 350},
  { id: 15, name: 'Magnete', money: 10000, items: [Items[7], Items[0]], life: 3000, strenght: 15},
  { id: 16, name: 'RubberMan', money: 10000, items: [Items[5], Items[8]], life: 420, strenght: 69},
  { id: 17, name: 'Dynama', money: 10000, items: [Items[4], Items[7]], life: 111, strenght: 570},
  { id: 18, name: 'Dr IQ', money: 10000, items: [Items[9], Items[2]], life: 312, strenght: 111},
  { id: 19, name: 'Magma', money: 10000, items: [Items[1], Items[0]],life: 900, strenght: 40},
  { id: 20, name: 'Tornado', money: 10000, items: [Items[8], Items[9]], life: 70, strenght: 650},
];
