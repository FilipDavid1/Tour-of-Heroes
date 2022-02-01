import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  isAdmin: boolean;

  constructor(private heroService: HeroService, private loginService: LoginService) { }

  ngOnInit() {
    this.getHeroes();
    this.isAdmin = this.loginService.getIsAdmin();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }



  dropDownChanged(event: MatSelectChange) {
    
    if (event.value == "Id") {
      return this.heroes.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    else if (event.value == "Name") {
      return this.heroes.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (event.value == "Money") {
      return this.heroes.sort((a, b) => a.money > b.money ? -1 : a.money < b.money ? 1 : 0);
    }
  }
    selectedOrder = new FormControl();
    orders: string[] = ['Id', 'Name', 'Money'];
}