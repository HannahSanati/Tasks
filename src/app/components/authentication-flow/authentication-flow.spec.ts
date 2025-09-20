import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationFlow } from './authentication-flow';

describe('AuthenticationFlow', () => {
  let component: AuthenticationFlow;
  let fixture: ComponentFixture<AuthenticationFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
