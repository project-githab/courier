import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cp-panel',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cp-panel.html',
  styleUrl: './cp-panel.css',
  standalone: true,
})
export class CpPanel {}
