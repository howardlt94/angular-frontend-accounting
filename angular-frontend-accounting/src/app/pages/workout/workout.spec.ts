import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workout } from './workout';

describe('Workout', () => {
  let component: Workout;
  let fixture: ComponentFixture<Workout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Workout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
