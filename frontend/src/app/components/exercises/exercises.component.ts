import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

import { Workout } from '../../interfaces/workout';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(private ReqService: RequestsService) { }

  Workout_name = "Workout One";
  uid = "";
  exercise_data = {
    "exercises": [{
      "name": "Bench Press",
      "sets": [
        {
          "pounds": 150,
          "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        }
      ]
    }]
  };
  show = false;
  Object = Object;

    
  // uid = 12521315;
  // name = "Workout One";
  // data = {
  //   "uid": 12521315,
  //   "name": "Workout One",
  //   "exercises": [{
  //     "name": "Bench Press",
  //     "sets": 
  //     [{"pounds": 150,"reps": 10}, 
  //     {"pounds": 150,"reps": 10}, 
  //     {"pounds": 150,"reps": 10}],
  //   }, 
  //   {
  //     "name": "Overhead Squat",
  //     "sets": 
  //     [{"pounds": 150,"reps": 10}, 
  //     {"pounds": 150,"reps": 10},
  //     {"pounds": 150,"reps": 10}],
  //   }, 
  //   {
  //     "name": "Bicep Curl",
  //     "sets": 
  //     [{"pounds": 150,"reps": 10}, 
  //     {"pounds": 150,"reps": 10}, 
  //     {"pounds": 150,"reps": 10}]
  //   }]
  // }
    
  ngOnInit(): void {
    this.create_box();
  }

  create_box(): void {
    
    let content = "";
    let Data_temp;
    this.ReqService.getWorkout(this.Workout_name).subscribe((data) =>{
      console.log("Req service output:");
      console.log(data);
      this.exercise_data = JSON.parse(JSON.stringify(data));
      // this.multiple_line(content, data);
      console.log(this.exercise_data);
      this.show = true;
    });
    // console.log(this.ReqService);
    // Data_temp = this.data;
    console.log(Data_temp);
    content += "";
  //   for ()
  }

}
