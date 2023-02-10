import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) }, { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
