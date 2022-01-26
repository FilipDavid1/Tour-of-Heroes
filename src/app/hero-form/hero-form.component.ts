
import { Component} from '@angular/core';

import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {



  constructor( private location: Location, private heroService: HeroService ) {  }
  
  
 

  model = new Hero('', 0, 0, 0);

  onSubmit():void {
    this.heroService.addHero(this.model).subscribe();
   }

  goBack(): void {
    this.location.back();
  }
  
 
    
 
}