import { TestBed, inject } from '@angular/core/testing';
import { NewItemResolver } from './new-item.resolver';


describe('NewItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewItemResolver]
    });
  });

  it('should be created', inject([NewItemResolver], (service: NewItemResolver) => {
    expect(service).toBeTruthy();
  }));
});
