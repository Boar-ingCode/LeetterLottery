import { Component, OnInit } from '@angular/core';
import { FlyingWordsComponent } from './flying-words/flying-words.component';
import { Router, RouterOutlet } from '@angular/router';
import { LetterSystemComponent } from './letter-system/letter-system.component';
import { HomePageComponent } from './home-page/home-page.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FlyingWordsComponent, RouterOutlet, LetterSystemComponent, HomePageComponent], 
  standalone: true,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  
  }

}
