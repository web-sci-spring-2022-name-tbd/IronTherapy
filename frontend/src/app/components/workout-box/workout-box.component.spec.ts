import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBoxComponent } from './workout-box.component';

describe('WorkoutBoxComponent', () => {
  let component: WorkoutBoxComponent;
  let fixture: ComponentFixture<WorkoutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
