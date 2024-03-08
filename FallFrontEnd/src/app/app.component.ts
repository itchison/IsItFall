import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsItFallComponent } from './is-it-fall/is-it-fall.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IsItFallComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'FallFrontEnd';
  public season = '';

  public setSeasonStyle(season: string): void {
    this.season = season;
  }
}
