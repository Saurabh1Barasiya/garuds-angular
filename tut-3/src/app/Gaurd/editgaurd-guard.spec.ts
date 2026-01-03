import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { editgaurdGuard } from './editgaurd-guard';

describe('editgaurdGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editgaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
