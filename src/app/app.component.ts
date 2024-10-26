import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angbusiness';
}
