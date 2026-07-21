import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-couriers',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-couriers.html',
  styleUrl: './pw-couriers.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwCouriers {}
