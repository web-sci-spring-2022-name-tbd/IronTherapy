import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-exercise-box',
  templateUrl: './exercise-box.component.html',
  styleUrls: ['./exercise-box.component.css']
})
export class ExerciseBoxComponent implements OnInit {
  formShow = false;
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


  // add_set(): void {
  //   // show a modal
  //   this.formShow = true;
  // }
test() {
  console.log(this.formShow)
}
  showForm() {
    console.log("showing form")
    this.formShow = true;
  }

  submitAdd(pounds: string, reps: string) {
    console.log(`adding set number ${this.data[0]} with pounds = ${pounds} and reps = ${reps}`)

    // connect to backend and add here

    this.formShow = false;
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
