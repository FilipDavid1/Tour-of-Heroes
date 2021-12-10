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

}
