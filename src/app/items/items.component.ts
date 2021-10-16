import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService, private messageService: MessageService ) { }

  selectedItem?: Item;
  
  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add('ItemsComponent: Selected item id=$(item.id)');
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems;
  }

}
