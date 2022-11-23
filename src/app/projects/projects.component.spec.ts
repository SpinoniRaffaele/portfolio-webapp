import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../shared/media.service';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      providers: [MediaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ASK FOR COORDS: should call the right method', () => {
    spyOn(window.navigator.geolocation, 'getCurrentPosition');
    component.askForCoords();
    expect(window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
