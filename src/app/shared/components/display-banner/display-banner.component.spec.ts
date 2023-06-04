import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBannerComponent } from './display-banner.component';

describe('DisplayBannerComponent', () => {
  let component: DisplayBannerComponent;
  let fixture: ComponentFixture<DisplayBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
