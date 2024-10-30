// app.routes.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LetterSystemComponent } from './letter-system/letter-system.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'letter-system', component: LetterSystemComponent },
];
