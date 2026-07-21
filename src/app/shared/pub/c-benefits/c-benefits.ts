import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-benefits',
  imports: [],
  templateUrl: './c-benefits.html',
  styleUrl: './c-benefits.css',
  standalone: true,
})
export class CBenefits {
  private router = inject(Router);

  goToPage() {
    this.router.navigate(['/dashboard']);
  }
}
