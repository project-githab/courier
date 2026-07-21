import { Component } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-schedule',
  imports: [CpHeader, CpPanel],
  templateUrl: './pw-schedule.html',
  styleUrl: './pw-schedule.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwSchedule {}
