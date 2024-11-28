import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../item/shared/item.model';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // These properties defined here can be accessed from the .html markup for this component
  // Define the columns to show and the order to show them for the table
  displayedColumns = ['id', 'name', 'price', 'description'];
  // List of items (our datasource for the table)
  items: Item[] = [];
  loading = false;

  // inject the ItemService into our component
  constructor(private itemService: ItemService) {

  }

  // When we activate this component call this method.
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loading = true;
    // Make the call and subscribe to the resulting observable
    // Don't worry about unsubscribing here - it automatically unsubscribes from http
    // observables when the request completes.
    this.itemService.getAll().subscribe(items => {
      this.items = items;
      this.loading = false;
    });
  }
}
