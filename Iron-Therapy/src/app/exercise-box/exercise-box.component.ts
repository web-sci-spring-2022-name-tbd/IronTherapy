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

}
