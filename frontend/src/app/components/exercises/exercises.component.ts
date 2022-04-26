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

  formShow2 = false;
  formShow3 = false;
  Workout_name: any = "";
  uid = "";
  exercise_data: any = {};
  show = false;
  Object = Object;
  toDelete: string = "";
  deleted = true;

  test() {
    console.log(this.exercise_data)
  }

  
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
      console.log(this.exercise_data.exercises);
      this.show = true;
    });
    // console.log(this.ReqService);
    // Data_temp = this.data;
    // console.log(Data_temp);
    content += "";
  //   for ()
  }

  AddExercise(exercise_name: string) {
    
    this.ReqService.AddExercise(this.Workout_name, exercise_name).subscribe((data) =>{
      // console.log(data);
      let update = {
        name: exercise_name,
        set: []
      }
      this.exercise_data.exercises.push(update);
      // this.exercise_data.push(update);

      this.formShow2 = false;
    });
  }


  DeleteExercise() {

    this.ReqService.deleteExercise(this.Workout_name, this.toDelete).subscribe((data) => {
      this.deleted = true;
      this.formShow3 = false; 
      let temp: any[] = [];
      this.exercise_data.exercises.forEach((el: any) => {
        if (el.name != this.toDelete) {
          temp.push(el);
        }
      })
      this.exercise_data.exercises = temp;
      // delete this.exercise_data.exercises[this.toDelete]
      

      this.toDelete = "";
    })


  }

  setDelete(name: string) {
    this.toDelete = name;
    this.deleted = false;
  }



}
