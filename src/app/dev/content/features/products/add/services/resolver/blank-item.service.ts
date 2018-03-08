import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BlankItemService implements Resolve<any> {
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const blank = new ReplaySubject<any>(0);
    return blank.take(1).map(item => {
      this.router.navigate(['/content/products/add']);
      return null;
    });
  }
}
