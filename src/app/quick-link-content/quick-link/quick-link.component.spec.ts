import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinkComponent } from './quick-link.component';

describe('QuickLinkComponent', () => {
  let component: QuickLinkComponent;
  let fixture: ComponentFixture<QuickLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
