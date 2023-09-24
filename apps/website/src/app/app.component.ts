import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'innovation-crib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';

  year = new Date().getFullYear();
}
