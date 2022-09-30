import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinkContentComponent } from './quick-link-content.component';

describe('QuickLinkContentComponent', () => {
  let component: QuickLinkContentComponent;
  let fixture: ComponentFixture<QuickLinkContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLinkContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLinkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
