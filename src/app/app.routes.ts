import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormpageComponent } from './formpage/formpage.component';
import {BusinessoverviewComponent} from './businessoverview/businessoverview.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formpage', component: FormpageComponent },
  { path: 'businessoverview', component: BusinessoverviewComponent }
];
