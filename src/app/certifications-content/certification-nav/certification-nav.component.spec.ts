import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationNavComponent } from './certification-nav.component';

describe('CertificationNavComponent', () => {
  let component: CertificationNavComponent;
  let fixture: ComponentFixture<CertificationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
