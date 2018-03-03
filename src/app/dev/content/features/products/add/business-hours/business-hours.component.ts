import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../../shared/models/items';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EditItemService } from '../services/provider/edit-item.service';

@Component({
  selector: 'at-product-add-business-hours',
  templateUrl: './business-hours.component.html',
  styleUrls: ['./business-hours.component.css']
})
export class ProductAddBusinessHoursComponent implements OnInit {

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
      name: '',
      description: ''
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