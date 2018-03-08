import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Item } from '../../../../../../shared/models/items';
import { ItemsService } from '../../../../../../shared/services/api/items/items.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EditItemService {

  private item$: BehaviorSubject<Item> = new BehaviorSubject<Item>(new Item());

  constructor(private itemService: ItemsService) {
  }

  public newitem() {

    try {
      if (this.item$) {
        this.item$.complete();
        delete this.item$;
      }
    } catch (e) {
    }

    this.item$ = new BehaviorSubject<Item>(new Item());

    return this.item$;
  }

  public edititem(id: string) {

    let bExist = false;

    const item = this.item$.value;

    if (item) {
      if (item.id === id) {
        bExist = true;
      }
    }

    if (bExist) {
      return this.item$;
    } else {
      return this.itemService.get(id);
    }
  }

  public publish(data: Item): void {
    return this.item$.next(data);
  }
}
