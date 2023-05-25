import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isUser: boolean = false;
  alertMessage: string = '';
  signUpPage: boolean = true;
  userAccounts: any[] = [];

  loginForm: FormGroup = new FormGroup({});
  signUpForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe({
      next: (response) => {
        console.log('queryParams', response);
      }
    })
  }

  ngOnInit(): void {
    console.log('snapshot', this.activatedRoute.snapshot.data);
    const userAccounts = localStorage.getItem('userAccounts');
    this.userAccounts = userAccounts !== null ? JSON.parse(userAccounts) : [];

    this.signUpForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  handleSubmit(form: any): void {
    if (form.valid) {
      if (this.signUpPage) {
        this.userAccounts.push(form.value)
        localStorage.setItem('userAccounts', JSON.stringify(this.userAccounts));
        // this.router.navigateByUrl('/office');
      } else {
        console.log('login', form.value);
        
      }
    }
    else {
      if (!this.alertMessage) {
        this.alertMessage = 'You are Totally Wrong !';
        setTimeout(() => {
          this.alertMessage = '';
        }, 2000);
      }
    }
    form.reset();
  }
}
