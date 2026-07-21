import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-company',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-company.html',
  styleUrl: './pw-company.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwCompany {}
