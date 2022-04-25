import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-exercise-box',
  templateUrl: './exercise-box.component.html',
  styleUrls: ['./exercise-box.component.css']
})
export class ExerciseBoxComponent implements OnInit {
  @Input() exercise_name: string = "";
  @Input() data = [
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
  // @Input() color: string = "";
 


  constructor() { }

  ngOnInit(): void {
    console.log("This is data in " + this.exercise_name + ": ");
    console.log(this.data);
  }




  // export interface Workout {
  //   uid: number;
  //   name: string;
  //   exercises: Exercise[];
  // }
  
  // export interface Exercise {
  //   name: string;
  //   sets: Set[];
  // }
  
  // export interface Set {
  //   pounds: number;
  //   reps: number;
  // }

  
}
