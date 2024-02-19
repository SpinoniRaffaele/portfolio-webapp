import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaService } from '../shared/media.service';
import { ThemeService } from '../shared/theme.service';
import { ThemeSelectorComponent } from './theme-selector.component';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;
  const themeSpy = {'setTheme': jest.fn(), 'getTheme': () => {return true;}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSelectorComponent ],
      providers: [
        MediaService, 
        {provide: ThemeService, useValue: themeSpy}
      ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the theme service if the theme is toggled', () => {
    jest.spyOn(themeSpy, 'setTheme');
    component.toggleDarkMode(false);
    expect(component.isDark).toEqual(false);
    expect(themeSpy.setTheme).toHaveBeenCalled();
  });
});
