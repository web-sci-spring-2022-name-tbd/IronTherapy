import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  Object = Object;
  graphs: number = 3;
  show = [true, false, false];
  // data2: ;
  data: any[] = [{
    "ExerciseName1": [
      {
        "Pounds": 10,
        "Reps": 5
      },
      {
        "Pounds": 15,
        "Reps": 5
      },
      {
        "Pounds": 10,
        "Reps": 5
      }],
    "ExerciseName2": [
      {
        "Pounds": 20,
        "Reps": 10,
      },
      {
        "Pounds": 20,
        "Reps": 12,
      },
      {
        "Pounds": "25",
        "Reps": 10,
      },
    ]
  },


  ];

  constructor() { }

  ngOnInit(): void {
    this.showGraph(0);
  }

  showGraph(num: number) {
    for (let i = 0; i < this.graphs; i++) {
      this.show[i] = i == num;
    }
  }

}
