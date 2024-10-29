// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormpageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angbusiness';
}
