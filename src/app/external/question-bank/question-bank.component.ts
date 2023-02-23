import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  questionType = new FormControl('');
  mcq = new FormControl('');
  maq = new FormControl('');

  questionTypeList: string[] = ['Multiple Choice Question', 'Multiple Answer Question', 'Fill in the Blank', 'True or False'];
  mcqOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  maqOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  selectedTopic: string = '';

  // make sure to destory the editor
  ngOnDestroy(): void {
  }

  chooseType(event: any) {
    console.log('TYPE', event);
    this.selectedTopic = event.value;
  }

  toCreateQuestion() {
    this.router.navigateByUrl('/create-question');
  }

  editQuestion() {
    this.router.navigateByUrl('/create-question');
  }
}
