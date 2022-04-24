import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  Object = Object;
  show: any = [];
  first = true;
  // data2: ;
  data: any[] = [{
    "ExerciseName1": [
      {
        "Pounds": 10,
        "Reps": 5,
        "Date": "2/1/22"
      },
      {
        "Pounds": 15,
        "Reps": 5,
        "Date": "2/3/22"
      },
      {
        "Pounds": 10,
        "Reps": 5,
        "Date": "2/5/22"
      }],
    "ExerciseName2": [
      {
        "Pounds": 20,
        "Reps": 10,
        "Date": "2/1/22"
      },
      {
        "Pounds": 20,
        "Reps": 12,
        "Date": "2/1/22"
      },
      {
        "Pounds": "25",
        "Reps": 10,
        "Date": "2/1/22"
      },
    ],
    "ExerciseName3": [
      {
        "Pounds": 20,
        "Reps": 10,
        "Date": "2/1/22"
      },
      {
        "Pounds": 20,
        "Reps": 12,
        "Date": "2/1/22"
      },
      {
        "Pounds": "25",
        "Reps": 10,
        "Date": "2/1/22"
      },
    ]
  }];
  dataRaw: any[] = [{
    "uid": 12521315,
    "name": "Workout One",
    "exercises": [{
      "name": "Bench Press",
      "sets": [{
        "pounds": 150,
        "reps": 10,
        "date": "2/1/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/5/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/9/22",
      }],
    }, {
      "name": "Overhead Squat",
      "sets": [{
        "pounds": 150,
        "reps": 10,
        "date": "2/2/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/6/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/10/22",
      }],
    }, {
      "name": "Bicep Curl",
      "sets": [{
        "pounds": 150,
        "reps": 10,
        "date": "2/3/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/7/22",
      }, {
        "pounds": 150,
        "reps": 10,
        "date": "2/11/22",
      }]
    }]
  }]
  constructor() { }

  ngOnInit(): void {
    this.showGraph(0);
  }
  showGraph(num: number) {
    console.log("showing " + num)
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
    console.log(this.show)
  }

}
