import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingWordsComponent } from './flying-words.component';

describe('FlyingWordsComponent', () => {
  let component: FlyingWordsComponent;
  let fixture: ComponentFixture<FlyingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyingWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
