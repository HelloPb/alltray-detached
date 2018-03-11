import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from '../../components/calendar/calendar.module';
import { HourModule } from '../../components/hour/hour.module';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule,
    HourModule
  ]
})
export class SharedModule { }
