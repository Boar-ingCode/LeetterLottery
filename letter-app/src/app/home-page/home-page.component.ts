import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlyingWordsComponent } from '../flying-words/flying-words.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FlyingWordsComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  // Zmieniono na styleUrls
})
export class HomePageComponent {

  constructor(private router: Router) {}  // Wstrzykiwanie Routera

  navigateToNewPage() {
    this.router.navigate(['/letter-system']); 
    console.log("nic");
  }

}
