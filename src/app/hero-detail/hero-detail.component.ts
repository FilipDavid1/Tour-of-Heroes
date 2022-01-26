import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Item } from '../item';
import { FItems } from '../mock-items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
 

  freeItems: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getHero();
    
  }
  click(): void {  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  sellItem(item: Item) {
    this.hero.money += item.price;
    item.isAvailable = true;
    this.itemService.addItem(item).subscribe(item => this.deleteItem(item));
  }

  deleteItem(item: Item) {
    const itemIndex: number = this.hero.items.indexOf(item);
    if(itemIndex !== -1){
      this.hero.items.splice(itemIndex, 1);
    }
  }


  
 
}