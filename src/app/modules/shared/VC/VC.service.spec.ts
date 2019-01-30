/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VCService } from './VC.service';

describe('Service: VC', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VCService]
    });
  });

  it('should ...', inject([VCService], (service: VCService) => {
    expect(service).toBeTruthy();
  }));
});
