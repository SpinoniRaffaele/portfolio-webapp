import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaService } from '../shared/media.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ MediaService ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isMenuToggled).toBe(false);
    expect(component.headerList).toBeDefined();
  });

  it('should toggle the menu correctly', () => {
    jest.spyOn(component.isMenuToggledEmitter, 'emit');
    component.toggleMenu(true);
    expect(component.isMenuToggled).toBe(true);
    expect(component.isMenuToggledEmitter.emit).toHaveBeenCalledWith(true);
  });

  it('should close the menu correctly', () => {
    jest.spyOn(component.isMenuToggledEmitter, 'emit');
    component.toggleMenu(false);
    expect(component.isMenuToggled).toBe(false);
    expect(component.isMenuToggledEmitter.emit).toHaveBeenCalledWith(false);
  });
});
