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
  constructor(private request: RequestsService, private router: Router) {
    this.photo = "";
    this.workout_name = "";
  }

  ngOnInit(): void {
  }

  visitExercises() {
    this.request.postWorkout(this.workout_name).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(["dashboard/exercises", this.workout_name]);
  }

}
