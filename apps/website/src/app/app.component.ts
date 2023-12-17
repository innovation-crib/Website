import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'innovation-crib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';

  year = new Date().getFullYear();
}
