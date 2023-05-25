import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesGuard } from './features.guard';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
  { path: 'external', loadChildren: () => import('./external/external.module').then(m => m.ExternalModule) },
  { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule), canLoad: [FeaturesGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
