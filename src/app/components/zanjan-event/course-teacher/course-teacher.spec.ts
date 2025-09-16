import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeacher } from './course-teacher';

describe('CourseTeacher', () => {
  let component: CourseTeacher;
  let fixture: ComponentFixture<CourseTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTeacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTeacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
