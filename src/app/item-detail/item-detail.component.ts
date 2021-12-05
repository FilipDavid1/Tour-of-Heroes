import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  items: Item[] = [];

  @Input() item?: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.item){
      this.itemService.updateItem(this.item);
    }
  }

  

}
