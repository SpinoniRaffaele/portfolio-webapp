import { EmbeddedViewRef, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from '../../media.service';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      providers: [MediaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the image with fullscreen size', () => {
    spyOn(component.modalService, 'open');
    component.openDialog({elementRef: {nativeElement: undefined}, createEmbeddedView: (): any => {}});
    expect(component.modalService.open).toHaveBeenCalledOnceWith(jasmine.anything(),  { fullscreen: true });
  });
});
