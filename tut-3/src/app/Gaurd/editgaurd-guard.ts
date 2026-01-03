export interface canComponentdeactivate {
  candeactivate: () => boolean;
}

import { CanDeactivateFn } from '@angular/router';

export const editgaurdGuard: CanDeactivateFn<canComponentdeactivate> = (component, currentRoute, currentState, nextState) => {

  // Angular guarantee deta hai ki
  // component.canDeactivate() exist karega
  return component.candeactivate(); 
};
