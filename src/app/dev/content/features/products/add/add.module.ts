import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ProductAddComponent } from './add.component';
import { ProductAddRoutingModule } from './add-routing.module';
import { EditItemService } from './services/provider/edit-item.service';
import { ExistingItemResolver } from './services/resolver/edit-item.resolver';
import { NewItemResolver } from './services/resolver/new-item.resolver';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProductAddComponent
  ],
  providers: [
    ExistingItemResolver,
    EditItemService,
    NewItemResolver
  ]
})
export class ProductAddModule { }

@NgModule({
  exports: [
    ProductAddRoutingModule,
    ProductAddModule
  ]
})
export class ProductAddExModule { }
