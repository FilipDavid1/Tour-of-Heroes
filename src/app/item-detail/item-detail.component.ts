import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { FItems } from '../mock-items';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  items: Item[] = [];

  @Input() item?: Item;

  @Output() deleteEvent = new EventEmitter();
  

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }
  
  save(): void {
    if (this.item){
      this.itemService.updateItem(this.item);
    }
  }

  callParrentDelete() {
    this.deleteEvent.emit();
  }

}
