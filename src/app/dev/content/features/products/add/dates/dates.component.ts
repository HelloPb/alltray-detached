import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../../shared/models/items';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EditItemService } from '../services/provider/edit-item.service';

@Component({
  selector: 'at-product-add-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class ProductAddDatesComponent implements OnInit {

  private item: Item;
  public formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private edit: EditItemService) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      sun: this.formBuilder.array([]),
      mon: this.formBuilder.array([]),
      tue: this.formBuilder.array([]),
      wed: this.formBuilder.array([]),
      thu: this.formBuilder.array([]),
      fri: this.formBuilder.array([]),
      sat: this.formBuilder.array([]),
    });
  }

  public back(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.edit.publish(this.item);

    this.router.navigate([`/content/products/add/stock/0`]);

  }

  public next(): void {

    this.item = Object.assign(this.item, { name: '', description: '' });

    this.edit.publish(this.item);

    this.router.navigate([`/content/products/add/save/0`]);

  }

  public ngOnInit() {
    this.route.data.subscribe((data: { item: Item }) => {
      this.item = data.item;
    });
  }
}
