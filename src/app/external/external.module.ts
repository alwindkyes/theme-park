import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { ExternalComponent } from './external.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TestComponent } from './test/test.component';
import { CreateQuestionComponent } from './create-question/create-question.component';


@NgModule({
  declarations: [
    ExternalComponent,
    QuestionBankComponent,
    TestComponent,
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ExternalModule { }
