import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LetterSystemComponent } from './letter-system/letter-system.component';

describe('Router: App', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'letter-system', component: LetterSystemComponent }
      ])],
      declarations: [AppComponent, LetterSystemComponent]
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should navigate to letter-system', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    await router.navigate(['/letter-system']);
    fixture.detectChanges();

    expect(router.url).toBe('/letter-system');
  });
});
