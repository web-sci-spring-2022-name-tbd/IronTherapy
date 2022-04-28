import { Workout } from './../../interfaces/workout';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public workouts_data: Workout[] = <Workout[]>{};
  public exercises_data: String[][] = [];
  public photo_data: String[] = [];
  constructor(private request: RequestsService) { }

  ngOnInit(): void {
    this.request.getWorkouts().subscribe(data => {
      this.workouts_data = data;
      data.forEach(element => {
        var name = element.name;
        name = name.toLowerCase();

        if (name.indexOf("back") != -1) {
          this.photo_data.push("../../assets/images/back_photo.jpg");
        } else if (name.indexOf("chest") != -1) {
          this.photo_data.push("../../assets/images/chest.jpg");
        } else if (name.indexOf("legs") != -1) {
          this.photo_data.push("../../assets/images/gym-deadlift.jpg");
        } else if (name.indexOf("abs") != -1)  {
          this.photo_data.push("../../assets/images/abs.jpg");
        } else {
          this.photo_data.push("../../assets/images/c_own.jpg");
        }
        var workout_exercises = <String[]>[];
        element.exercises.forEach(exercise => {
          workout_exercises.push(exercise.name);
        });
        this.exercises_data.push(workout_exercises);
      });
    });
  }

}
