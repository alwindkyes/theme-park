import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor } from 'ngx-editor';
import { toDoc } from 'ngx-editor';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  constructor(private router: Router) { }

  editor: Editor = new Editor;
  html: '' = "";

  ngOnInit(): void {
    this.editor = new Editor();
  }

  questionType = new FormControl('');
  mcq = new FormControl('');
  maq = new FormControl('');
  toasterMessage: string = '';

  questionTypeList: string[] = ['Multiple Choice Question', 'Multiple Answer Question', 'Fill in the Blank', 'True or False'];
  mcqOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  maqOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  selectedTopic: string = '';
  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  chooseType(event: any) {
    console.log('TYPE', event);
    this.selectedTopic = event.value;
  }

  toQuestionBank() {
    this.router.navigateByUrl('/question-bank');
  }

  submitQuestion() {
    this.getToasterMessage('New Question Created !')
  }

  getToasterMessage(message: string) {
    this.toasterMessage = message;
    setTimeout(() => {
      this.toasterMessage = '';
    }, 3000);
  }
}
