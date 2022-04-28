import { RequestsService } from 'src/app/services/requests.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Exercise } from 'src/app/interfaces/workout';


@Component({
  selector: 'app-exercise-box',
  templateUrl: './exercise-box.component.html',
  styleUrls: ['./exercise-box.component.css']
})
export class ExerciseBoxComponent implements OnInit {
  formShow = false;
  
  @Input() workout_name: string = "";
  @Input() exercise_name: string = "";
  @Input() data: any[] = [
                    {
                        pounds: 150,
                        reps: 10
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
 


  constructor(private request: RequestsService) { }

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

    this.request.updateSet(this.workout_name, this.exercise_name, {pounds: parseInt(pounds), reps: parseInt(reps)}).subscribe((data) => {
      this.formShow = false;
      this.data.push({pounds: parseInt(pounds), reps: parseInt(reps)});
    });

    // connect to backend and add here
  }

  delete(index: number) {
    console.log(`deleting set number ${index}`);
    let temp: Exercise[] = [];
    for (let i = 0; i < this.data.length; i++) {
      if (i != index) {
        temp.push(this.data[i])
      }
    }
    this.data = temp;
    this.request.deleteSet(this.workout_name, this.exercise_name, temp).subscribe((data: any) => {
      
    })
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
