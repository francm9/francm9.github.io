import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'calendar', component: CalendarComponent }
];
