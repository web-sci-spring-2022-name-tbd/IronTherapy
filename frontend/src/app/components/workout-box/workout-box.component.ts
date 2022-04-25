import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-box',
  templateUrl: './workout-box.component.html',
  styleUrls: ['./workout-box.component.css']
})
export class WorkoutBoxComponent implements OnInit {
  @Input() photo: String;
  @Input() workout_name: String = "";
  public data: any = { workout_name: this.workout_name }
  constructor() {
    this.photo = "";
    this.workout_name = "";
  }

  ngOnInit(): void {
  }

}
