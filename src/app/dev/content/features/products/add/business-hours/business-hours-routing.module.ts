import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddBusinessHoursComponent } from './business-hours.component';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { NewItemResolver } from '../services/resolver/new-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddBusinessHoursComponent,
    resolve: { item: NewItemResolver }
  },
  {
    path: ':id',
    component: ProductAddBusinessHoursComponent,
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
export class ProductAddBusinessHoursRoutingModule { }
