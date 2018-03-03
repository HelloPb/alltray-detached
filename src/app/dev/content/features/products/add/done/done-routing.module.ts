import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDoneComponent } from './done.component';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductAddDoneComponent
  },
  {
    path: ':id',
    component: ProductAddDoneComponent,
    resolve: { item: EditItemResolver }
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
