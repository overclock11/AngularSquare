import { TestBed, async, inject } from '@angular/core/testing';

import { LogueadoGuard } from './logueado.guard';

describe('LogueadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogueadoGuard]
    });
  });

  it('should ...', inject([LogueadoGuard], (guard: LogueadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
