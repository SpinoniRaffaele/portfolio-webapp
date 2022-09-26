import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../shared/media.service';

import { HomePageContentComponent } from './home-page-content.component';

describe('HomePageContentComponent', () => {
  let component: HomePageContentComponent;
  let fixture: ComponentFixture<HomePageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageContentComponent ],
      providers: [MediaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
