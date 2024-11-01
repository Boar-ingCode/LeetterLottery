import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  pickEnvelope(event: Event): void {
    event.stopPropagation();

    const clickedElement = event.target as HTMLImageElement;
    const clickedBlock = clickedElement.closest('.envelope-block') as HTMLElement;

    if (!clickedBlock) {
      return;
    }

    // Jeśli istnieje poprzednio wybrany element, przywróć go do oryginalnej pozycji
    if (this.selectedEnvelope) {
      this.resetSelectedEnvelope();
    }

    // Dodaj pusty div w miejscu klikniętego elementu
    const placeholder = this.renderer.createElement('div');
    this.renderer.addClass(placeholder, 'placeholder');
    clickedBlock.parentNode?.insertBefore(placeholder, clickedBlock);

    // Przenieś kliknięty element na środek
    this.selectedEnvelope = clickedBlock;
    this.renderer.addClass(clickedBlock, 'centered');

    // Dodaj efekt blur do innych elementów
    const envelopeBlocks = this.el.nativeElement.querySelectorAll('.envelope-block');
    envelopeBlocks.forEach((block: HTMLElement) => {
      if (block !== clickedBlock) {
        this.renderer.addClass(block, 'blur');
      }
    });
  }

  resetSelectedEnvelope(): void {
    if (this.selectedEnvelope) {
      this.renderer.removeClass(this.selectedEnvelope, 'centered');
      const placeholder = this.el.nativeElement.querySelector('.placeholder');
      if (placeholder) {
        placeholder.replaceWith(this.selectedEnvelope);
      }
      this.selectedEnvelope = null;

      // Usuń efekt blur z innych elementów
      const envelopeBlocks = this.el.nativeElement.querySelectorAll('.envelope-block');
      envelopeBlocks.forEach((block: HTMLElement) => {
        this.renderer.removeClass(block, 'blur');
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.selectedEnvelope) {
      this.resetSelectedEnvelope();
    }
  }
}