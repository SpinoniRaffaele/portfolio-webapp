import { ComponentFixture, TestBed } from '@angular/core/testing';
import { headerList } from '../header.datamodel';

import { HeaderMenuComponent } from './header-menu.component';

describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the section selected', () => {
    jest.spyOn(component.menuItemSelected, 'emit');
    const nativeElement = fixture.nativeElement;
    const listElement = nativeElement.querySelector('.header-list-elem');
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

   expect(component.menuItemSelected.emit).toHaveBeenCalledWith(headerList[0].label);
  });
});
