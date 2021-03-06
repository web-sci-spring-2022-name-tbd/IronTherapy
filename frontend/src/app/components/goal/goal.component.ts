import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';
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

  constructor(private request: RequestsService, private router: Router) { }

  ngOnInit(): void {
    if (this.data) {
      this.fillColor = (this.data!.current < this.data!.target ? 'var(--off-color)' : 'green');
      this.rotate = `${((Math.min(this.data!.current, this.data!.target) / this.data!.target) * 360) / 2}deg`;
    }
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['dashboard/homepage']));
  }

  // Update a goal
  updateGoal(goalExercise: string, goalTarget: string) {
    let goal: Goal = {
      exercise: goalExercise,
      target: parseInt(goalTarget),
      current: this.data!.current,
    };

    this.request.updateGoal(goal).subscribe((data) => {
      console.log(data);
      this.reload();
    });

  }

  // Delete a goal
  deleteGoal(exerciseName: string) {
    this.request.deleteGoal(exerciseName).subscribe((data) => {
      console.log(data);
      this.reload();
    });
    
  }
}
