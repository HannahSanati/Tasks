import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePrerequisites } from './course-prerequisites';

describe('CoursePrerequisites', () => {
  let component: CoursePrerequisites;
  let fixture: ComponentFixture<CoursePrerequisites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePrerequisites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePrerequisites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
