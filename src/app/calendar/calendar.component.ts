import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventCardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'advent-calendar-main',
  imports: [AdventCardComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit{
  currentDay: number = 1;
  todayCard: any;
  isCardOpened: boolean = false;

  days = [
    {
      number: 1,
      title: 'Cupón de 10€ en Shein',
      message: 'Para iniciar el mes con buen pie, te regalo este cupón para que puedas comprar tus antojitos y alguna cosita para ti',
      emoji: '💕',
      date: new Date(2024, 12, 1)
    },
    {
      number: 2,
      title: 'Cupón por la elección de la peli en una de nuestras citas',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 3,
      title: 'Esta noche tienes un cuento especial',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 3)
    },
    {
      number: 4,
      title: 'Día 2',
      message: 'Cógete una tableta de chocolate de la Ramona, invita el Piti',
      emoji: '🌟',
      date: new Date(2025, 12, 4)
    },
    {
      number: 5,
      title: 'Ve a la máquina y cógete una bebida rica, que paga el Pitoncio',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 5)
    },
    {
      number: 6,
      title: 'Relálate y disfruta del día, el Iti lo tiene todo preparado para ti',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 6)
    },
    {
      number: 7,
      title: 'Estamos en Toledo, tú eliges el sitio de comer o cenar',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 7)
    },
    {
      number: 8,
      title: 'Cupón por unos churritos con chocolate',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 8)
    },
    {
      number: 9,
      title: 'Cupón por un cafecito de Starbucks',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 9)
    },
    {
      number: 10,
      title: '(Mensaje bonito por el día de hoy)',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 10)
    },
    {
      number: 11,
      title: 'Día 2',
      message: 'Vale por una tarde de manualidades, comida y bebida rica',
      emoji: '🌟',
      date: new Date(2025, 12, 11)
    },
    {
      number: 12,
      title: 'Funko de Once (Eleven)',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 12)
    },
    {
      number: 13,
      title: 'Cupón por un día de casita, relax y mimos',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 13)
    },
    {
      number: 14,
      title: 'Vale por un día especial donde tú eliges lo que hacemos',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 14)
    },
    {
      number: 15,
      title: '(Mensaje de buenos dias 1/2 mes)',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 15)
    },
    {
      number: 16,
      title: 'Calcetines navideños a juego',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 16)
    },
    {
      number: 17,
      title: 'Cupón por un antojito en el cole',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 18,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 19,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 20,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 21,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 22,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 23,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 24,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 25,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 26,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 27,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 28,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 29,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 30,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    },
    {
      number: 31,
      title: 'Día 2',
      message: 'Eres mi persona favorita',
      emoji: '🌟',
      date: new Date(2025, 12, 2)
    }
  ];

  ngOnInit() {
    const today = new Date();
    
    if (today.getMonth() === 12) { // Si estamos en diciembre
      this.currentDay = today.getDate();
    } else {
      this.currentDay = 1; // Por defecto día 1 si no es diciembre
    }

    this.todayCard = this.days.find(day => day.number === this.currentDay);
  }

  previousDay() {
    if (this.currentDay > 1) {
      this.currentDay--;
      this.todayCard = this.days.find(day => day.number === this.currentDay);
      this.isCardOpened = false; // Resetear al cambiar de día
    }
    else if (this.currentDay === 1) {
      this.currentDay = this.days.length; // Ir al último día si estamos en el día 1
      this.todayCard = this.days.find(day => day.number === this.currentDay);
      this.isCardOpened = false; // Resetear al cambiar de día
    }
  }

  nextDay() {
    if (this.currentDay < this.days.length) {
      this.currentDay++;
      this.todayCard = this.days.find(day => day.number === this.currentDay);
      this.isCardOpened = false; // Resetear al cambiar de día
    } else if (this.currentDay === this.days.length) {
      this.currentDay = 1; // Reiniciar al día 1 si se supera el último día
      this.todayCard = this.days.find(day => day.number === this.currentDay);
      this.isCardOpened = false; // Resetear al cambiar de día
    }
  }

  onCardOpened(opened: boolean) {
    this.isCardOpened = opened;
  }
}
