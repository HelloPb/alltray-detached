import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDatesComponent } from './dates.component';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddDatesRoutingModule } from './dates-routing.module';
import { WeekDaysModule } from './week-days/week-days.module';
import { ExclusiveDatesModule } from './exclusive-dates/exclusive-dates.module';

@NgModule({
  imports: [
    SharedModule,
    WeekDaysModule,
    ExclusiveDatesModule
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
