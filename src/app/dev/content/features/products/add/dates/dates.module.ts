import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDatesComponent } from './dates.component';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddDatesRoutingModule } from './dates-routing.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddDatesComponent]
})
export class ProductAddDatesModule { }

@NgModule({
  exports: [
    ProductAddDatesRoutingModule,
    ProductAddDatesModule
  ]
})
export class ProductAddDatesExModule { }
