import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // Получаем Router для отслеживания переходов между страницами.
  private readonly router = inject(Router);

  // Нужен для автоматической отписки от Observable,
  // когда сервис будет уничтожен.
  private readonly destroyRef = inject(DestroyRef);

  // Хранит текущее состояние меню:
  // false — закрыто
  // true — открыто
  readonly isOpen = signal(false);

  constructor() {
    // Router генерирует события при каждой навигации.
    // Нас интересует только начало перехода на другую страницу.
    //
    // Как только пользователь начинает переход:
    // Dashboard -> Orders,
    // Orders -> Finance
    // и т.д.
    //
    // меню автоматически закрывается.
    //
    // Благодаря этому невозможно вернуться на страницу,
    // где меню осталось открытым.
    this.router.events
      .pipe(
        // Оставляем только событие начала навигации.
        filter((event) => event instanceof NavigationStart),

        // Автоматически отписываемся при уничтожении сервиса.
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.close();
      });
  }

  // Переключить состояние меню.
  // Закрыто -> Открыто,
  // Открыто -> Закрыто
  toggle(): void {
    this.isOpen.update((value) => !value);
  }

  // Закрыть меню.
  close(): void {
    this.isOpen.set(false);
  }
}
