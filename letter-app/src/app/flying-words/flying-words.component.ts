import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-flying-words',
  standalone: true,
  imports: [CommonModule],  // Include CommonModule here
  templateUrl: './flying-words.component.html',
  styleUrls: ['./flying-words.component.css']
})
export class FlyingWordsComponent implements AfterViewInit {
  words = ['SSIJ TAM', 'SSIJ TAM', 'SSIJ TAM', 'SSIJ TAM', 'SSIJ TAM'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const wordElements = document.querySelectorAll('.flying-word');
      const container = document.getElementById('flying-words-container');

      if (container) {
        wordElements.forEach(word => {
          const wordElement = word as HTMLElement;

          // Initialize position and speed with random values
          let posX = Math.random() * (container.offsetWidth - wordElement.clientWidth);
          let posY = Math.random() * (container.offsetHeight - wordElement.clientHeight);
          let speedX = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
          let speedY = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);

          // Set the initial random position
          wordElement.style.transform = `translate(${posX}px, ${posY}px)`;

          function moveWord() {
            if (container) {
              posX += speedX;
              posY += speedY;

              if (posX <= 0 || posX >= container.offsetWidth - wordElement.clientWidth) {
                speedX *= -1;
              }
              if (posY <= 0 || posY >= container.offsetHeight - wordElement.clientHeight) {
                speedY *= -1;
              }

              wordElement.style.transform = `translate(${posX}px, ${posY}px)`;
            }
            requestAnimationFrame(moveWord);
          }

          moveWord();
        });
      }
    }
  }
}
