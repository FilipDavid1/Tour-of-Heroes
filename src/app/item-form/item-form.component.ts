import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  constructor( private location: Location, private itemService: ItemService ) { }

  model = new Item('', 0);

  onSubmit(): void {
    this.itemService.addItem(this.model).subscribe();
  }

  goBack(): void {
    this.location.back();
  }



}
