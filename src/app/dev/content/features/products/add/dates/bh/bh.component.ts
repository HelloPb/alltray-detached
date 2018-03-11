import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Bhs, HHMM } from '../../../../../../shared/models/bhs';

@Component({
  selector: 'at-bh',
  templateUrl: './bh.component.html',
  styleUrls: ['./bh.component.css']
})
export class BhComponent implements OnInit, OnChanges {

  @Input() bhs: Bhs[] = [];
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      bhrs: this.formBuilder.array([])
    });
  }

  private updateForm(): void {
  }

  private updateBhsForm(bhs: Bhs[]): void {

    for (let i = 0; i < this.bhrs.length; i++) {
      this.bhrs.removeAt(i);
    }

    bhs.forEach(bh => {
      const formGroup = this.createBhForm();
      this.updateBhForm(formGroup, bh);
      this.bhrs.push(formGroup);
    });
  }

  private createBhForm(): FormGroup {
    return this.formBuilder.group({
      from: this.createHHMMForm(),
      to: this.createHHMMForm()
    });
  }

  private updateBhForm(formGroup: FormGroup, bh: Bhs): void {
    this.updateHHMMForm(formGroup.get('from') as FormGroup, bh.from);
    this.updateHHMMForm(formGroup.get('to') as FormGroup, bh.from);
  }

  private createHHMMForm(): FormGroup {
    return this.formBuilder.group({
      h: '',
      m: ''
    });
  }

  private updateHHMMForm(formGroup: FormGroup, hhmm: HHMM) {
    formGroup.patchValue({
      h: hhmm.h,
      m: hhmm.m
    });
  }

  get bhrs(): FormArray {
    return this.formGroup.get('bhrs') as FormArray;
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {

        const chng = changes[propName];

        switch (propName) {
          case 'bhs': this.updateBhsForm(chng.currentValue);
            break;
        }
      }
    }
  }
}
