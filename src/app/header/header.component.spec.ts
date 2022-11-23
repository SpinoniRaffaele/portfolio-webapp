import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../shared/media.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ MediaService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isMenuToggled).toBeFalse();
    expect(component.headerList).toBeDefined();
  });

  it('should toggle the menu correctly', () => {
    spyOn(component.isMenuToggledEmitter, 'emit');
    component.toggleMenu({target: {checked: true}});
    expect(component.isMenuToggled).toBeTrue();
    expect(component.isMenuToggledEmitter.emit).toHaveBeenCalledWith(true);
  });

  it('should close the menu correctly', () => {
    spyOn(component.isMenuToggledEmitter, 'emit');
    component.closeMenu();
    expect(component.isMenuToggled).toBeFalse();
    expect(component.isMenuToggledEmitter.emit).toHaveBeenCalledWith(false);
  });
});
