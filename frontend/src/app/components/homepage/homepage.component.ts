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
  constructor(private auth: AuthService, private request: RequestsService) {}
  public currentGoals?: Goal[];

  ngOnInit(): void {
    // Get the goals and load them into currentGoals
    this.request.getGoals().subscribe((goals) => {
      this.currentGoals = goals;
    });

    // Get default goals
    this.request.checkDefaultGoals().subscribe((goals) => {
      this.currentGoals = goals;
    });
  }

  // Call the sign out method from the auth service
  logout() {
    this.auth.SignOut();
  }

  // Make a new goal
  // makeGoal(goal: Goal) {
  makeGoal() {
    let goal: Goal = {
      exercise: 'test3',
      target: 100,
      current: 20,
    };
    this.request.postGoal(goal).subscribe((data) => {
      console.log(data);
    });
  }

  // Delete a goal
  deleteGoal(exerciseName: string) {
    let exercise = 'test';
    this.request.deleteGoal(exercise).subscribe((data) => {
      console.log(data);
    });
  }
}
