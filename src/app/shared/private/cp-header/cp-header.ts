import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../core/menu-service';
import { CpPanel } from '../cp-panel/cp-panel';

@Component({
  selector: 'app-cp-header',
  imports: [CpPanel],
  templateUrl: './cp-header.html',
  styleUrl: './cp-header.css',
  standalone: true,
})
export class CpHeader {
  private readonly router = inject(Router);

  readonly menuService = inject(MenuService);

  get pageInfo() {
    const url = this.router.url;

    if (url.includes('/orders')) {
      return {
        title: 'Заказы на доставку',
        subtitle1: 'Принимайте заказы и назначайте исполнителей',
        subtitle2: '',
      };
    }

    if (url.includes('/couriers')) {
      return {
        title: 'Курьеры',
        subtitle1: '',
        subtitle2: '',
      };
    }

    if (url.includes('/transport')) {
      return {
        title: 'Транспорт',
        subtitle1: '',
        subtitle2: '',
      };
    }

    if (url.includes('/finance')) {
      return {
        title: 'Финансы и документы',
        subtitle1: '',
        subtitle2: '',
      };
    }

    if (url.includes('/company')) {
      return {
        title: 'Профиль компании',
        subtitle1: '',
        subtitle2: '',
      };
    }

    return { title: 'Привет, Алексей!', subtitle1: 'Воскресенье,', subtitle2: '12 июля' };
  }
}
