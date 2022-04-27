import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../../services/requests.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  Object = Object;
  show: any = [];
  first = true;
  dataGot = false;
  workoutSelected = false;
  dataRaw: any[] = [{
    "uid": "",
    "name": "",
    "date": "",
    "exercises": [{
      "name": "",
      "sets": [{
        "pounds": 150,
        "reps": 10,
      }],
    }]
  }];
  goalsParsed: any[] = [{}];

  data: any[] = [];
  exercises: Array<string> = [];
  constructor(private http: RequestsService) { }

  ngOnInit(): void {
    this.http.getWorkouts().subscribe(dataRaw => {
      let data = JSON.parse(JSON.stringify(dataRaw));
      let result: any = [{}];

      data.forEach((workout: {date: string, exercises: any[]; }) => {
        workout.exercises.forEach(exercise => {
          this.exercises.push(exercise.name);
          let temp: { pounds: any; reps: any; date: string; }[] = []
          exercise.sets.forEach((set: any) => {
            temp.push({pounds: set.pounds, reps: set.reps, date: workout.date})
          })
          if (!(Object.keys(result[0]).includes(exercise.name))) {
            result[0][exercise.name] = temp
          } else {
            temp.forEach((set: any) => {
              result[0][exercise.name].push(set);
            })
          }
        })
      })
      // console.log(result)
      this.http.getGoals().subscribe(data => {
        console.log(data)
        data.forEach(goal => {
          this.goalsParsed[0][goal.exercise] = goal.target;
        })
        console.log("parsed goals")
        console.log(this.goalsParsed)

      })

      this.data = result;

      this.dataRaw = data;
      this.dataGot = true;
    })
  }


  showGraph(num: number) {
    // console.log("showing " + num)
    if (this.first) {
      this.show.push(true);
      for (let i = 1; i < Object.keys(this.data[0]).length; i++) {
        this.show.push(false);
      }
      this.first = false;
    } else {
      for (let i = 0; i < Object.keys(this.data[0]).length; i++) {
        this.show[i] = i == num;
      }
    }
  }

}
