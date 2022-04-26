import { Component, OnInit } from '@angular/core';
import { Goal } from '../../interfaces/goal';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // TODO: set HTML variables from the input form homepage
  @Input() data?: Goal;
  @Input() index?: number;

  @HostBinding('style.--rotate') rotate?: string;
  @HostBinding('style.--fill-color') fillColor?: string;

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.fillData();
    }
  }

  // Need to start dynmically changing the html and css
  fillData() {
    console.log(this.data);
    this.fillColor = (this.data!.current < this.data!.target ? 'var(--off-color)' : 'green');
    this.rotate = `${((this.data!.current / this.data!.target) * 360)/2}deg`;
  }

}
