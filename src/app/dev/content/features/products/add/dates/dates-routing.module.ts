import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { BlankItemResolver } from '../services/resolver/blank-item.resolver';
import { ProductAddDatesComponent } from './dates.component';
import { ProductAddDatesOutletComponent } from './dates.outlet';
import { ExclusiveDatesComponent } from './exd/exclusive-dates.component';
import { WeekDaysComponent } from './wds/week-days.component';
import { EditItemDateResolver } from '../services/resolver/edit-item-date.resolver';
import { EditItemDateExdResolver } from '../services/resolver/edit-item-date-exd.resolver';
import { EditItemDateWdsResolver } from '../services/resolver/edit-item-date-wds.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddDatesComponent,
        resolve: { item: BlankItemResolver }
      },
      {
        path: ':id',
        component: ProductAddDatesOutletComponent,
        resolve: { item: EditItemResolver },
        children: [
          {
            path: '',
            component: ProductAddDatesComponent
          },
          {
            path: 'date/:id',
            resolve: { item: EditItemDateResolver },
            children: [
              {
                path: 'exd/:id',
                component: ExclusiveDatesComponent,
                resolve: { item: EditItemDateExdResolver }
              },
              {
                path: 'wds/:id',
                component: WeekDaysComponent,
                resolve: { item: EditItemDateWdsResolver },
              }]
          }]
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductAddDatesRoutingModule { }
