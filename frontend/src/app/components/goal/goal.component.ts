import { Component, OnInit } from '@angular/core';
import { Goal } from '../../interfaces/goal';
import { Input } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // TODO: set HTML variables from the input form homepage
  @Input() data?: Goal;

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
    } else {
      console.log("else");
    }
  }



}
