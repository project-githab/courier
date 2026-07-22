import { Component, computed, signal } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';
import { RouterLink } from '@angular/router';

interface StatusItem {
  label: string;
  count: number;
}

@Component({
  selector: 'app-pw-dashboard',
  imports: [CpHeader, CpPanel, RouterLink],
  templateUrl: './pw-dashboard.html',
  styleUrl: './pw-dashboard.css',
  host: {
    class: 'flex flex-col height-screen',
  },
  standalone: true,
})
export class PwDashboard {
  // Внутри класса компонента:
  isActive = signal(true); // Начальное состояние — выключен

  // Метод для переключения из шаблона
  toggleState(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isActive.set(input.checked);
  }

  // Метод для принудительного изменения из кода (например, по кнопке «Сбросить»)
  turnOff() {
    this.isActive.set(false);
  }

  stats = signal<StatusItem[]>([
    { label: 'Свободны', count: 7 },
    { label: 'На доставке', count: 3 },
    { label: 'Перерыв', count: 2 },
  ]);

  maxCount = computed(() => {
    const counts = this.stats().map((item) => item.count);
    return Math.max(...counts, 1); // избегаем деления на 0
  });

  getBarWidth(count: number): string {
    const percentage = (count / this.maxCount()) * 100;
    return `${percentage}%`;
  }

  updateCount(index: number, newCount: number) {
    this.stats.update((items) => {
      const updated = [...items];
      updated[index].count = newCount;
      return updated;
    });
  }
}
