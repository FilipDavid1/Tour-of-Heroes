import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { FItems } from '../mock-items';
import { Location } from '@angular/common';


@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})
export class FreeItemsComponent implements OnInit {

  freeItems = FItems;
  hero: Hero;
  heroCash: number;


  constructor(
    private itemService: ItemService,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location ) {  }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }
  
  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.freeItems = items);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      this.heroCash = this.hero.money;
  }

  buyFreeItem(item: Item): void {
    if (this.heroCash > item.price){
      this.heroCash -=  item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
