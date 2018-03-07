import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './add.component';

const routes: Routes = [
  {
    path: '',
    component: ProductAddComponent,
    children: [
      {
        path: '',
        redirectTo: 'choose',
      },
      {
        path: 'choose',
        loadChildren: 'app/dev/content/features/products/add/choose/choose.module#ProductAddChooseExModule'
      },
      {
        path: 'stock',
        loadChildren: 'app/dev/content/features/products/add/stock/stock.module#ProductAddStockExModule'
      },
      {
        path: 'dates',
        loadChildren: 'app/dev/content/features/products/add/dates/dates.module#ProductAddDatesExModule'
      },
      {
        path: 'save',
        loadChildren: 'app/dev/content/features/products/add/save/save.module#ProductAddSaveExModule'
      },
      {
        path: 'done',
        loadChildren: 'app/dev/content/features/products/add/done/done.module#ProductAddDoneExModule'
      }
    ]
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
export class ProductAddRoutingModule { }
