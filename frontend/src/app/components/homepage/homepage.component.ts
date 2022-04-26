import { Router } from '@angular/router';
import { Exercise } from './../../interfaces/workout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RequestsService } from '../../services/requests.service';
import { Goal } from '../../interfaces/goal';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private auth: AuthService, private request: RequestsService,  private router: Router) {}
  public currentGoals?: Goal[];
  public exercises?: string[];

  ngOnInit(): void {
    // Get the goals and load them into currentGoals
    this.request.getGoals().subscribe((goals) => {
      this.currentGoals = goals;
    });

    // Get default goals
    this.request.checkDefaultGoals().subscribe((goals) => {
      this.currentGoals = goals;
    });

    // Get the exercises and load them into exercises
    this.request.getExercises().subscribe((exercises) => {
      this.exercises = exercises;
      console.log(this.exercises);
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['dashboard/homepage']));
  }

  // Call the sign out method from the auth service
  logout() {
    this.auth.SignOut();
  }

  // Make a new goal
  makeGoal(goalExercise: string, goalTarget: string, goalCurrent: string = '0') {
    if (goalExercise === 'Select Exercise' || goalTarget === '') {
      window.alert('Please enter an exercise and a target');
      return;
    }

    let goal: Goal = {
      exercise: goalExercise,
      target: parseInt(goalTarget),
      current: parseInt(goalCurrent),
    };

    this.request.postGoal(goal).subscribe((data) => {
      console.log(data);
    });

    this.reload();
  }
}
