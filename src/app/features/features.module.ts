import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ButtonComponent } from './shared/button/button.component';
import { RatingComponent } from './shared/rating/rating.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CardComponent } from './shared/card/card.component';
import { ImageComponent } from './shared/image/image.component';
import { OptimizedImageComponent } from './optimized-image/optimized-image.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficeComponent } from './office/office.component';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { NotchedButtonComponent } from './shared/notched-button/notched-button.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    ButtonComponent,
    RatingComponent,
    DynamicComponent,
    CardComponent,
    ImageComponent,
    OptimizedImageComponent,
    DialogComponent,
    CalendarComponent,
    LoginComponent,
    OfficeComponent,
    AdminComponent,
    AdminManageComponent,
    SnackbarComponent,
    FileUploadComponent,
    NotchedButtonComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeaturesModule { }
