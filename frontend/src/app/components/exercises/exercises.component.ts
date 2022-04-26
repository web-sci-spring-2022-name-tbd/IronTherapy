import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { ActivatedRoute } from '@angular/router';

// import { Workout } from '../../interfaces/workout';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {

  constructor(private ReqService: RequestsService, private router: ActivatedRoute) { }

  Workout_name: any = "";
  uid = "";
  exercise_data: any = {};
  show = false;
  Object = Object;

  
  ngOnInit(): void {
    // this.Workout_name = this.router.getCurrentNavigation()?.extras.state;
    // console.log("nginit console log")
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.router.params.subscribe((params) => {
     this.Workout_name = params["workoutname"];
     console.log(this.Workout_name);
     this.create_box();
    });
  }

  create_box(): void {
    let content = "";
    let Data_temp;
    this.ReqService.getWorkout(this.Workout_name).subscribe((data) =>{
      // console.log("Req service output:");
      console.log(data);
      this.exercise_data = JSON.parse(JSON.stringify(data));
      // console.log(this.exercise_data);
      this.show = true;
    });
    // console.log(this.ReqService);
    // Data_temp = this.data;
    // console.log(Data_temp);
    content += "";
  //   for ()
  }

}
