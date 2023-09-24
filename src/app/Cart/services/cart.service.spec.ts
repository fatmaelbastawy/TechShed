/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cart.serviceService } from './cart.service.service';

describe('Service: Cart.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cart.serviceService]
    });
  });

  it('should ...', inject([Cart.serviceService], (service: Cart.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
