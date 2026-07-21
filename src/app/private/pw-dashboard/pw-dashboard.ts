import { Component, signal } from '@angular/core';
import { CpHeader } from '../../shared/private/cp-header/cp-header';
import { CpPanel } from '../../shared/private/cp-panel/cp-panel';

@Component({
  selector: 'app-pw-dashboard',
  imports: [CpHeader, CpPanel],
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
}
