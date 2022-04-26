import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-box',
  templateUrl: './workout-box.component.html',
  styleUrls: ['./workout-box.component.css']
})
export class WorkoutBoxComponent implements OnInit {
  @Input() photo: String;
  @Input() workout_name: String = "";
  public data: any = { workout_name: this.workout_name }
  constructor(private router: Router) {
    this.photo = "";
    this.workout_name = "";
  }

  ngOnInit(): void {
  }

  visitExercises() {
    this.router.navigate(["dashboard/exercises", this.workout_name]);
  }

}
