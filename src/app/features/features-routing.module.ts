import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FeaturesComponent } from './features.component';
import { StandAndDeliverComponent } from './stand-and-deliver/stand-and-deliver.component';
import { OfficeComponent } from './office/office.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from '../admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { SuperAdminGuard } from '../super-admin.guard';
import { AdminAccessGuard } from '../admin-access.guard';
import { UnsavedGuard } from '../unsaved.guard';
import { ResolveGuard } from '../resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    title: 'Features'
  },
  {
    path: 'stand',
    component: StandAndDeliverComponent,
    title: 'Stand & Deliver'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    resolve: {
      data: ResolveGuard
    }
  },
  {
    path: 'office',
    component: OfficeComponent,
    title: 'Office',
    canActivate: [AdminGuard],
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'admin',
    title: 'Admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          {
            path: 'manage',
            component: AdminManageComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
