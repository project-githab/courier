import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-orders',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-orders.html',
  styleUrl: './pw-orders.css',
  host: {
    class: 'flex flex-col height-screen',
  },
})
export class PwOrders {}
