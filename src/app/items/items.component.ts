import { Component, OnInit } from '@angular/core';


import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';
import { FItems } from '../mock-items';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = FItems;


  constructor(private itemService: ItemService, private messageService: MessageService ) { }

  selectedItem?: Item;
  
  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`ItemsComponent: Selected item id=${item.id}`);
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item).subscribe(item => { this.items.push(item); });
    
  }
  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }
  option: string = '';

  dropDownChanged(event: any) {
    this.option = event.target.value;


    if (this.option == "sort by id") {
      return this.items.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    else if (this.option == "sort by name") {
      return this.items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (this.option == "sort by price") {
      return this.items.sort((a, b) => a.price > b.price ? -1 : a.price < b.price ? 1 : 0);
    }


  }

}
