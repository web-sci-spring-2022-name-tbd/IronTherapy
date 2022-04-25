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
  dataGot = true;
  workoutSelected = false;
  dataRaw: any[] = [{
    "uid": 12521315,
    "name": "Workout One",
    "date": "2/1/22",
    "exercises": [{
      "name": "Bench Press",
      "sets": [{
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }],
    }, {
      "name": "Overhead Squat",
      "sets": [{
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }],
    }, {
      "name": "Bicep Curl",
      "sets": [{
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }, {
        "pounds": 150,
        "reps": 10,
      }]
    }]
  }]
  workout: any[] = [{
    "name": "Bench Press",
    "sets": [{
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }],
  }, {
    "name": "Overhead Squat",
    "sets": [{
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }],
  }]
  dataFinal: any[] = [];
  constructor(private http: RequestsService) { }

  ngOnInit(): void {
    // this.showGraph(0);
    // this.http.get
    this.http.getWorkouts().subscribe(dataRaw => {
      let data = JSON.parse(JSON.stringify(dataRaw));
      this.dataRaw = data;
    })
  }

  showWorkout(index: number) {
    this.workout = this.dataRaw[index].exercises;
    // this.workout.forEach()

    this.workoutSelected = true;

  }

  showGraph(num: number) {
    console.log("showing " + num)
    if (this.first) {
      this.show.push(true);
      for (let i = 1; i < Object.keys(this.workout).length; i++) {
        this.show.push(false);
      }
      this.first = false;
    } else {
      for (let i = 0; i < Object.keys(this.workout).length; i++) {
        this.show[i] = i == num;
      }
    }
    // console.log(this.show)
  }

}
