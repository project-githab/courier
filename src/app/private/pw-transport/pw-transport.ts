import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-transport',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-transport.html',
  styleUrl: './pw-transport.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwTransport {}
