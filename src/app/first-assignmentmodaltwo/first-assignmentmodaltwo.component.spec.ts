import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAssignmentmodaltwoComponent } from './first-assignmentmodaltwo.component';

describe('FirstAssignmentmodaltwoComponent', () => {
  let component: FirstAssignmentmodaltwoComponent;
  let fixture: ComponentFixture<FirstAssignmentmodaltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAssignmentmodaltwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAssignmentmodaltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
