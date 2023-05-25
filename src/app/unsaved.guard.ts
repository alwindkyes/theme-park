import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficeComponent } from './features/office/office.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OfficeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty) {
      return window.confirm('Sure ?')
    }
    return true;
  }

}
