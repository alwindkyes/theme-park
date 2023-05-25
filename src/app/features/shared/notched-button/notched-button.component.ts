import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notched-button',
  templateUrl: './notched-button.component.html',
  styleUrls: ['./notched-button.component.scss']
})
export class NotchedButtonComponent {
  notchButtons: any[] = [];
  form: FormGroup = new FormGroup({});
  name = 'N/A accessability';
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      partNumber: [''],
      description: ['']
    });
  }

  submitForm() {
    let a = 'accessability';
    console.log('replace', this.name.replace(a, 'YES'));
    console.log('match', this.name.match(a));
    this.form.reset();
  }

  intoDescription() {
    let replaced = '';
    this.form.value.partNumber.forEach((element: any) => {
      console.log('|description|', this.form.value.description, '|element|', element);
      replaced = this.form.value.description.replace(element, 'YES')
      console.log('REPLACE', replaced);
    });

    this.form.patchValue({
      description: this.form.value.description + ' ' + replaced === ' ' ? replaced : this.form.value.partNumber
    })

    console.log('FORMGROUP', this.form.value);
  }
}
