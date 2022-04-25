import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-exercise-box',
  templateUrl: './exercise-box.component.html',
  styleUrls: ['./exercise-box.component.css']
})
export class ExerciseBoxComponent implements OnInit {
  @Input() exercise_name: string = "";
  // @Input() color: string = "";
 


  constructor() { }

  ngOnInit(): void {
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
