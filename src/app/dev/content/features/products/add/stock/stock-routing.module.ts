import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddStockComponent } from './stock.component';
import { ExistingItemResolver } from '../services/resolver/edit-item.resolver';
import { NewItemResolver } from '../services/resolver/new-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddStockComponent,
    resolve: { item: NewItemResolver }
  },
  {
    path: ':id',
    component: ProductAddStockComponent,
    resolve: { item: ExistingItemResolver }
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
export class ProductAddStockRoutingModule { }
