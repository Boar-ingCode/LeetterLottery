import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  titles: string[] = [
    'Welcome to My Site',
    'Explore the World of Code',
    'Your Gateway to Innovation',
    'Discover New Possibilities',
    'Angular Rocks!'
  ];
  randomTitle: string = '';

  ngOnInit(): void {
    this.randomTitle = this.getRandomTitle();
  }

  getRandomTitle(): string {
    const index = Math.floor(Math.random() * this.titles.length);
    return this.titles[index];
  }
}
