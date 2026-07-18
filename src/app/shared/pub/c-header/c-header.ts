import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-header',
  imports: [],
  templateUrl: './c-header.html',
  styleUrl: './c-header.css',
})
export class CHeader {
  private router = inject(Router);

  goToPage() {
    this.router.navigate(['/dashboard']);
  }
}
