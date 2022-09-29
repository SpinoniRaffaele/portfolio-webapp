import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeContentComponent } from './about-me-content.component';

describe('AboutMeContentComponent', () => {
  let component: AboutMeContentComponent;
  let fixture: ComponentFixture<AboutMeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content', () => {
    expect(component.aboutMeContent).toBeDefined();
  });
});
