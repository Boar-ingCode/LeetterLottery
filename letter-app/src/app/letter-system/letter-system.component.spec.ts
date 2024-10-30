import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSystemComponent } from './letter-system.component';

describe('LetterSystemComponent', () => {
  let component: LetterSystemComponent;
  let fixture: ComponentFixture<LetterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
