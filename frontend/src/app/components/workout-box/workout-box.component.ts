import { Workout } from './../../interfaces/workout';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-workout-box',
  templateUrl: './workout-box.component.html',
  styleUrls: ['./workout-box.component.css']
})
export class WorkoutBoxComponent implements OnInit {
  @Input() photo: String;
  @Input() workout_name: String = "";
  public data: any = { workout_name: this.workout_name }
  formShow = false;
  constructor(private request: RequestsService, private router: Router) {
    this.photo = "";
    this.workout_name = "";
  }

  ngOnInit(): void {
  }
  submitAdd(workout_rename: string) {
    this.request.postWorkout(this.workout_name).subscribe(data => {
      console.log(data);
    });
    this.request.putWorkout(this.workout_name, workout_rename).subscribe((data) => {
      this.formShow = false;
    });
    this.router.navigate(["dashboard/exercises", workout_rename]);
    // connect to backend and add here
  }

}
