import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../media.service';

import { ContentGroupComponent } from './content-group.component';

describe('ContentGroupComponent', () => {
  let component: ContentGroupComponent;
  let fixture: ComponentFixture<ContentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentGroupComponent ],
      providers: [MediaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
