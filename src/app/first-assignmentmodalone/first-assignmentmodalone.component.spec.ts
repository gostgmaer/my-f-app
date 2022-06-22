import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAssignmentmodaloneComponent } from './first-assignmentmodalone.component';

describe('FirstAssignmentmodaloneComponent', () => {
  let component: FirstAssignmentmodaloneComponent;
  let fixture: ComponentFixture<FirstAssignmentmodaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAssignmentmodaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAssignmentmodaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
