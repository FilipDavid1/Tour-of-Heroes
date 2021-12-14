import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Item } from '../item';
import { FItems, Items } from '../mock-items';
import { ItemDetailComponent } from '../item-detail/item-detail.component';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  fItemEvent = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
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
    this.fItemEvent.emit(item);
    this.deleteItem(item);
  }

  deleteItem(item: Item) {
    const itemIndex: number = this.hero.items.indexOf(item);
    if(itemIndex !== -1){
      this.hero.items.splice(itemIndex, 1);
    }
  }

  pushItem(){
    this.fItemEvent.emit();
  }
 
}