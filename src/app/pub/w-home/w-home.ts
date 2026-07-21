import { Component } from '@angular/core';
import { CHeader } from '../../shared/pub/c-header/c-header';
import { CBenefits } from '../../shared/pub/c-benefits/c-benefits';

@Component({
  selector: 'app-w-home',
  imports: [CHeader, CBenefits],
  templateUrl: './w-home.html',
  styleUrl: './w-home.css',
  standalone: true,
})
export class WHome {}
