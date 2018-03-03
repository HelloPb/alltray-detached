import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../../../../shared/models/items';
import { EditItemService } from '../provider/edit-item.service';

@Injectable()
export class NewItemResolver implements Resolve<Item> {
  constructor(private edit: EditItemService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const self = this;
    return Observable.create(function (observer) {
      self.edit.reset().subscribe(item => {
        observer.next(item);
        observer.complete();
      });
    });
  }
}
