import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'at-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit, OnChanges {

  @Input() h: FormControl;
  @Input() m: FormControl;

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      h: '',
      m: ''
    });
  }

  public addHour(h: number): void {
    if (h < 24) {
      this.formGroup.patchValue({ h: ++h });
    }
  }

  public reduceHour(h: number): void {
    if (h > 0) {
      this.formGroup.patchValue({ h: --h });
    }
  }

  public addMinute(m: number): void {
    if (m < 60) {
      this.formGroup.patchValue({ m: ++m });
    }
  }

  public reduceMinute(m: number): void {
    if (m > 0) {
      this.formGroup.patchValue({ m: --m });
    }
  }

  private applyHour(h: FormControl): void {
    this.formGroup.setControl('h', h);
  }

  private applyMinute(m: FormControl): void {
    this.formGroup.setControl('m', m);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {

        const chng = changes[propName];

        switch (propName) {
          case 'h': this.applyHour(chng.currentValue);
            break;
        }
        switch (propName) {
          case 'm': this.applyMinute(chng.currentValue);
            break;
        }
      }
    }
  }

  ngOnInit() {
  }

}
