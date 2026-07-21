import { Component, inject } from '@angular/core';
import { CpHeader } from '../../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../../shared/private/cp-panel/cp-panel';
import { isActive, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PwOrders } from '../pw-orders/pw-orders';
import { PwsStory } from '../pw-story/pws-story';
import { PwsActive } from '../pw-active/pws-active';

@Component({
  selector: 'app-pw-order-main',
  imports: [CpHeader, CpPanel, PwOrders, RouterLinkActive, RouterLink, PwsStory, PwsActive],
  templateUrl: './pw-order-main.html',
  styleUrl: './pw-order-main.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwOrderMain {
  private router = inject(Router);

  readonly isOrdersPage = isActive('/orders', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });

  readonly isActiveOrdersPage = isActive('/orders/active', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });

  readonly isStoryPage = isActive('/orders/story', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });
}
