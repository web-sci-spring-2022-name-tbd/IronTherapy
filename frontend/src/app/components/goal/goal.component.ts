import { Component, OnInit } from '@angular/core';
import { Goal } from '../../interfaces/goal';
import { Input } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: set HTML variables from the input form homepage
  @Input() data: Goal = {} as Goal;

}
