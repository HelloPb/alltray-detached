import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Item } from '../../../../../../shared/models/items';

@Injectable()
export class EditItemService {

  private item = new ReplaySubject<Item>(0);

  constructor() {
    this.item.next(new Item());
  }

  public get(): ReplaySubject<Item> {
    return this.item;
  }

  public publish(data: Item): void {
    return this.item.next(data);
  }

  public reset(): ReplaySubject<Item> {
    this.item.complete();
    this.item = new ReplaySubject<Item>(0);
    this.item.next(new Item());
    return this.item;
  }

}
