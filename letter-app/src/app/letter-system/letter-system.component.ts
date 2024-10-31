import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-letter-system',
  templateUrl: './letter-system.component.html',
  styleUrls: ['./letter-system.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class LetterSystemComponent {
  selectedEnvelope: HTMLElement | null = null;
  isGifDisplayed: boolean = false; // Flaga, aby śledzić, czy GIF był już wyświetlony
  isPopupVisible: boolean = false; // Flaga, aby kontrolować widoczność popupu

  pickEnvelope(event: Event): void {
    event.stopPropagation();

    const clickedElement = event.target as HTMLImageElement;
    const clickedBlock = clickedElement.closest('.envelope-block') as HTMLElement;

    if (!clickedBlock) {
      return;
    }

    // Usuń GIF z poprzedniego elementu, jeśli istnieje
    if (this.selectedEnvelope && this.selectedEnvelope !== clickedBlock) {
      const previousImage = this.selectedEnvelope.querySelector('img') as HTMLImageElement;
      previousImage.src = 'assets/images/envelope.png'; // Powrót do obrazu statycznego
      this.selectedEnvelope.classList.remove('centered');
    }

    // Zmiana obrazu na GIF w klikniętym elemencie, tylko jeśli GIF nie był wcześniej wyświetlony
    const clickedImage = clickedBlock.querySelector('img') as HTMLImageElement;
    if (!this.isGifDisplayed) {
      clickedImage.src = 'assets/images/envelope-animation.gif'; // Wyświetl GIF
      this.isGifDisplayed = true; // Ustaw flagę, że GIF został wyświetlony
    } else {
      this.showPopup(); // Wyświetl popup, jeśli GIF już był wyświetlony
    }

    // Dodanie klasy 'centered' do klikniętego elementu
    if (clickedBlock.classList.contains('centered')) {
      clickedBlock.classList.remove('centered');
      clickedImage.src = 'assets/images/envelope.png'; // Powrót do obrazu statycznego
      this.selectedEnvelope = null;
    } else {
      clickedBlock.classList.add('centered');
      this.selectedEnvelope = clickedBlock;
    }
  }

  // Funkcja wyświetlająca okno popup
  showPopup(): void {
    this.isPopupVisible = true;
  }

  // Funkcja zamykająca okno popup
  closePopup(): void {
    this.isPopupVisible = false;
    this.isGifDisplayed = false
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.selectedEnvelope) {
      const previousImage = this.selectedEnvelope.querySelector('img') as HTMLImageElement;
      previousImage.src = 'assets/images/envelope.png'; // Powrót do obrazu statycznego
      this.selectedEnvelope.classList.remove('centered');
      this.selectedEnvelope = null;
    }
  }
}
