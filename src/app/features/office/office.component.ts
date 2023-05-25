import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe({
      next: (response) => {
        console.log('response', response);
      }
    })
  }

  isDirty: boolean = true;

  handleLogout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigateByUrl('');
  }
}
