import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDoneComponent } from './done.component';
import { ExistingItemResolver } from '../services/resolver/edit-item.resolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductAddDoneComponent
  },
  {
    path: ':id',
    component: ProductAddDoneComponent,
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
export class ProductAddDoneRoutingModule { }
