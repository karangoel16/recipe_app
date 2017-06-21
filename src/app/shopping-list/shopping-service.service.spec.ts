import { TestBed, inject } from '@angular/core/testing';

import { ShoppingServiceService } from './shopping-service.service';

describe('ShoppingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingServiceService]
    });
  });

  it('should be created', inject([ShoppingServiceService], (service: ShoppingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
