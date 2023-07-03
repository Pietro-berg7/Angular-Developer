import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const hasToken = !!localStorage.getItem('token');

  return hasToken;
};
