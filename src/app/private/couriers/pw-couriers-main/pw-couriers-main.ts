import { Component, HostListener, inject, signal } from '@angular/core';
import { CpHeader } from '../../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../../shared/private/cp-panel/cp-panel';
import { isActive, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PwLine } from '../pw-line/pw-line';
import { PwFree } from '../pw-free/pw-free';
import { PwDelivery } from '../pw-delivery/pw-delivery';
import { PwCouriers } from '../pw-couriers/pw-couriers';

@Component({
  selector: 'app-pw-couriers-main',
  imports: [
    CpHeader,
    CpPanel,
    RouterLink,
    RouterLinkActive,
    PwLine,
    PwFree,
    PwDelivery,
    PwCouriers,
  ],
  templateUrl: './pw-couriers-main.html',
  styleUrl: './pw-couriers-main.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwCouriersMain {
  private readonly router = inject(Router);

  readonly isMenuOpen = signal(false);

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isMenuOpen.update((value) => !value);
  }

  @HostListener('document:click')
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  readonly isOrdersPage = isActive('/couriers', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });

  readonly isActiveOrdersPage = isActive('/couriers/free', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });

  readonly isStoryPage = isActive('/couriers/delivery', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });

  readonly isLinePage = isActive('/couriers/line', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored',
  });
}
