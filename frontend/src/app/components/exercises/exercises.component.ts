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
    // this.ReqService.getExercises().subscribe((data) =>{
    //   console.log(data);
    //   // this.multiple_line(content, data);
    // });
    // console.log(this.ReqService);
    // Data_temp = this.data;
    console.log(Data_temp)
    content += "";
  //   for ()
  }

}
