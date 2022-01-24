import { Item } from "./item";

export class Hero{
    id: number;
    name: string;
    money: number;
    items: Item[];
    life: number;
    strength: number;

    constructor(
        name: string,
        money: number,
        life: number,
        strength: number,
      ) {  }
}