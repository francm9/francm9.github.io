import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-christmas-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './christmas-background.component.html',
  styleUrls: ['./christmas-background.component.css']
})
export class ChristmasBackgroundComponent implements OnInit {
  snowflakes: number[] = [];

  ngOnInit() {
    // Crear 50 copos de nieve
    this.snowflakes = Array.from({ length: 50 }, (_, i) => i);
  }
}