import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { ProductAddDatesComponent } from './dates.component';
import { BlankItemResolver } from '../services/resolver/blank-item.resolver';

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
        component: ProductAddDatesComponent,
        resolve: { item: EditItemResolver }
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
