import { TestBed, inject } from '@angular/core/testing';
import { EditItemResolver } from './edit-item.resolver';

describe('EditItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditItemResolver]
    });
  });

  it('should be created', inject([EditItemResolver], (service: EditItemResolver) => {
    expect(service).toBeTruthy();
  }));
});
