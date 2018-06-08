import { TestBed, inject } from '@angular/core/testing';

import { LugaresServiceService } from './lugares-service.service';

describe('LugaresServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LugaresServiceService]
    });
  });

  it('should be created', inject([LugaresServiceService], (service: LugaresServiceService) => {
    expect(service).toBeTruthy();
  }));
});
