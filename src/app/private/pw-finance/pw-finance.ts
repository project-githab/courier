import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-finance',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-finance.html',
  styleUrl: './pw-finance.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwFinance {}
