import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChristmasBackgroundComponent } from './christmas-background/christmas-background.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, ChristmasBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piti-advent-calendar';
}
