import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isUser: boolean = true;
  alertMessage: string = '';
  userList: any[] = [];

  signInForm: FormGroup = new FormGroup({});
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

    const userListSting = localStorage.getItem('signUpData');
    this.userList = userListSting !== null ? JSON.parse(userListSting) : [];

    this.signInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      // password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    })

    this.signUpForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
      {
        validator: this.passwordMatchValidator
      })
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      console.log("control", control);
      return { invalid: true };
    }
    return null;
  }

  signIn(signInForm: FormGroup): void {
    // console.log('signInForm', signInForm);
    if (signInForm.valid) {
      const isUser = this.userList.some(element => {
        return element.email === signInForm.value.email && element.password === signInForm.value.password;
      });
      if (isUser) {
        this.alertMessage = 'Sign In Successfully';
        this.router.navigateByUrl('office');
        signInForm.reset();
      } else {
        this.alertMessage = 'Invalid email or password';
      }
    } else {
      this.alertMessage = 'Please fill in all required fields correctly';
      signInForm.markAllAsTouched();
    }
  }

  signUp(signUpForm: FormGroup): void {
    if (signUpForm.valid) {
      // console.log('signInForm', signUpForm.value);
      if (this.userList.length) {
        const userExists = this.userList.some(element => {
          return element.email === signUpForm.value.email;
        });
        if (userExists) {
          this.alertMessage = 'User already exists';
          return;
        }
        this.userList.push(signUpForm.value);
      } else {
        this.userList.push(signUpForm.value);
      }
      localStorage.setItem('signUpData', JSON.stringify(this.userList));
      this.alertMessage = 'Sign-up successful!';
      this.router.navigateByUrl('office');
      signUpForm.reset();
    } else {
      this.alertMessage = 'Please fill in all required fields correctly';
      signUpForm.markAllAsTouched();
    }
  }
}
