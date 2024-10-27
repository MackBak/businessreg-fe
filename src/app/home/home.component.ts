// home.component.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
