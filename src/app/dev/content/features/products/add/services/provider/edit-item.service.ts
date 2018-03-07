import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Item } from '../../../../../../shared/models/items';
import { ItemsService } from '../../../../../../shared/services/api/items/items.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EditItemService {

  private item = new Item();
  private item$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([this.item]);

  constructor(private itemService: ItemsService) {
  }

  public newitem() {
    return this.item$.map(x => x.find(item => item.id === ''));
  }

  public existingitem(id: string) {

    let bExist = false;

    if (this.item) {
      if (this.item.id === id) {
        bExist = true;
      }
    }

    if (bExist) {
      return this.item$.map(x => x.find(item => item.id === id));
    } else {
      this.itemService.get(id);
    }
  }

  public publish(data: Item): void {
    return this.item$.next([data]);
  }

}
