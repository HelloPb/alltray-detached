import { TestBed, inject } from '@angular/core/testing';
import { ItemResolver } from './item.resolver';

describe('ResolveItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemResolver]
    });
  });

  it('should be created', inject([ItemResolver], (service: ItemResolver) => {
    expect(service).toBeTruthy();
  }));
});