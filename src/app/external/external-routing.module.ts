import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatCptComponent } from './chat-cpt/chat-cpt.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ExternalComponent } from './external.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: ExternalComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'question-bank',
        component: QuestionBankComponent,
        title: 'Question Bank'
      },
      {
        path: 'test',
        component: TestComponent,
        title: 'TEST'
      },
      {
        path: 'create-question',
        component: CreateQuestionComponent,
        title: 'Create Question'
      },
      {
        path: '',
        component: ChatCptComponent,
        title: 'Chat CPT'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
