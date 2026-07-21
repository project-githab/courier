import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-profile',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-profile.html',
  styleUrl: './pw-profile.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwProfile {}
