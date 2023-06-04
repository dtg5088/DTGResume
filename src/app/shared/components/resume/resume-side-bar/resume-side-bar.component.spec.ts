import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSideBarComponent } from './resume-side-bar.component';

describe('ResumeSideBarComponent', () => {
  let component: ResumeSideBarComponent;
  let fixture: ComponentFixture<ResumeSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
