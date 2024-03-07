import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsItFallComponent } from './is-it-fall/is-it-fall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IsItFallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FallFrontEnd';
}
