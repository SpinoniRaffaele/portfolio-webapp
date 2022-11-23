import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../media.service';

import { ContentGroupComponent } from './content-group.component';
import { ContentGroup } from './content-group.datamodel';

describe('ContentGroupComponent', () => {
  let component: ContentGroupComponent;
  let fixture: ComponentFixture<ContentGroupComponent>;
  let mockContentGroup: ContentGroup = {
    info: [
        {
            imagePath: 'img1', 
            text: 'text1'
        },
        {
          imagePath: 'img2', 
          text: 'text2'
        },
    ], 
    title: 'dunno'
};

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

  it('should correctly change conent', () => {
    component.contentGroupInfo = mockContentGroup;
    component.selectedContent = 1;
    component.changeComponent(true);
    expect(component.selectedContent).toBe(1);
    expect(component.isLastContent()).toBe(true);
    expect(component.isFirstContent()).toBe(false);

    component.changeComponent(false);
    expect(component.selectedContent).toBe(0);
    expect(component.isLastContent()).toBe(false);
    expect(component.isFirstContent()).toBe(true);
  });
});
