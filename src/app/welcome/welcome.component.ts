import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  day: number = new Date().getDate();

  constructor(private router: Router) {}

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }
}