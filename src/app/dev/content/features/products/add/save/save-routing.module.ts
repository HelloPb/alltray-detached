import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddSaveComponent } from './save.component';
import { ExistingItemResolver } from '../services/resolver/edit-item.resolver';
import { NewItemResolver } from '../services/resolver/new-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddSaveComponent,
    resolve: { item: NewItemResolver }
  },
  {
    path: ':id',
    component: ProductAddSaveComponent,
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
export class ProductAddSaveRoutingModule { }
