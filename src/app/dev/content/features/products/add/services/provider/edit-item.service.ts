import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Item } from '../../../../../../shared/models/items';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ItemsService } from '../../../../../../shared/services/api/items/items.service';

@Injectable()
export class EditItemService {

  private item$: BehaviorSubject<Item>;

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

    const item = new Item();
    item.id = '0';

    this.item$ = new BehaviorSubject<Item>(item);

    return this.item$;
  }

  public edititem(id: string) {

    let bExist = false;

    if (this.item$) {

      const item = this.item$.value;

      if (item) {
        if (item.id === id) {
          bExist = true;
        }
      }
    }

    if (bExist) {

      return this.item$;

    } else {

      return this.getItem(id);

    }
  }

  private getItem(id: string) {

    const self = this;
    return Observable.create(observer => {
      self.itemService.get(id).subscribe(
        item1 => {

          const item = new Item();
          item.id = '0';

          observer.next(item);
          this.item$ = new BehaviorSubject<Item>(item);
        }, error => {
          observer.next();
        }
      );
    });
  }

  public publish(data: Item): void {
    return this.item$.next(data);
  }
}
