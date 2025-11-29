import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";

@Component({
  standalone: true,
  selector: 'advent-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class AdventCardComponent {
  @Input() day: number = 1;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() emoji: string = '🎁';
  @Input() unlockDate: Date = new Date();
  @Output() cardOpened = new EventEmitter<boolean>();
  
  isOpened: boolean = false;
  skipAnimation: boolean = false; // Nueva propiedad

  ngOnChanges(changes: SimpleChanges) {
    if (changes['day'] && !changes['day'].firstChange) {
      // Desactivar animación temporalmente
      this.skipAnimation = true;
      this.isOpened = false;
      this.cardOpened.emit(false);
      
      // Reactivar animación después de un momento
      setTimeout(() => {
        this.skipAnimation = false;
      }, 50);
    }
  }

  get isLocked(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const unlock = new Date(this.unlockDate);
    unlock.setHours(0, 0, 0, 0);
    return today < unlock;
  }

  onCardClick() {
    if (!this.isLocked) {
      this.isOpened = !this.isOpened;
      this.cardOpened.emit(this.isOpened);
    }
  }
}