import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddBusinessHoursComponent } from './business-hours.component';
import { ProductAddBusinessHoursRoutingModule } from './business-hours-routing.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddBusinessHoursComponent]
})
export class ProductAddBusinessHoursModule { }

@NgModule({
  exports: [
    ProductAddBusinessHoursRoutingModule,
    ProductAddBusinessHoursModule
  ]
})
export class ProductAddBusinessHoursExModule { }
