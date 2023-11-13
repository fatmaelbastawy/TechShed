/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Cartservice } from './cart.service';

describe('Service: Cart.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cartservice]
    });
  });

  it('should ...', inject([Cartservice], (service: Cartservice) => {
    expect(service).toBeTruthy();
  }));
});
