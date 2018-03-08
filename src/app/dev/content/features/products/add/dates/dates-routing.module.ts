import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingItemResolver } from '../services/resolver/edit-item.resolver';
import { NewItemResolver } from '../services/resolver/new-item.resolver';
import { ProductAddDatesComponent } from './dates.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddDatesComponent,
        resolve: { item: NewItemResolver }
      },
      {
        path: ':id',
        component: ProductAddDatesComponent,
        resolve: { item: ExistingItemResolver }
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
