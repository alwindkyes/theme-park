import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService implements OnInit {

  private questionForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question_name: new FormControl(),
      question_description: new FormControl(),
      question_type: new FormControl(),
      score: new FormControl(),
      tags: new FormControl(),
      mcq: this.formBuilder.group({
        option_one: new FormControl(),
        option_two: new FormControl(),
        option_three: new FormControl(),
        option_four: new FormControl(),
        option_five: new FormControl()
      }),
      maq: this.formBuilder.group({
        option_one: new FormControl(),
        option_two: new FormControl(),
        option_three: new FormControl(),
        option_four: new FormControl(),
        option_five: new FormControl()
      }),
      true_or_false: new FormControl(),
      fill_in_the_blanks: new FormControl(),
    })
  }
}
