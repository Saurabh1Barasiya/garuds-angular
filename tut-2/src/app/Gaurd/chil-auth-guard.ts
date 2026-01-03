import { CanActivateChildFn } from '@angular/router';
import { AuthServices } from '../Services/auth-services';
import { inject } from '@angular/core';

export const chilAuthGuard: CanActivateChildFn = (childRoute, state) => {
  let service = inject(AuthServices);
  console.log("hi i am running...")
  if (service.adminStatus()) {
    return true;
  } else {
    alert("you are not admin")
    return false;
  }
};
