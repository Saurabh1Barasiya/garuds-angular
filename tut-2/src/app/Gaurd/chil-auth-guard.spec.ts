import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { chilAuthGuard } from './chil-auth-guard';

describe('chilAuthGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => chilAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
