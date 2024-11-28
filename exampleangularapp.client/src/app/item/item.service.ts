import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './shared/item.model';

@Injectable({
  providedIn: 'root' // This sets up the global dependency injection for this service
})
export class ItemService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Create the call to add the item and return the new item
  add(item: Item) {
    return this.http.post<Item>('api/Item/Add', item);
  }

  // Create the call to get and return a list of items
  getAll() {
    return this.http.get<Item[]>('api/Item/GetAll');
  }
}
