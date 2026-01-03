import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Authservices } from './Services/authservices';

export const authgaurdGuard: CanActivateFn = (route, state) => {
  let authservice = inject(Authservices);

  if(authservice.loginStatus()){
    return true;
  }

  alert("please login first");
  return false;
};
