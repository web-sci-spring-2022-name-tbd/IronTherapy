import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseBoxComponent } from './exercise-box.component';

describe('ExerciseBoxComponent', () => {
  let component: ExerciseBoxComponent;
  let fixture: ComponentFixture<ExerciseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
