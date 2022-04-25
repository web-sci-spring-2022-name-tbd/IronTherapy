import { Exercise } from './../../interfaces/workout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { RequestsService } from "../../services/requests.service";
import { Goal } from "../../interfaces/goal";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  
  constructor(private auth: AuthService, private request: RequestsService) {}

  ngOnInit(): void {
    // Get the goals and load them into the page
    this.request.getGoals().subscribe((goals) => {
      console.log(goals);
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
      exercise: "Bench",
      target: 100,
      current: 20
    };
    this.request.postGoal(goal).subscribe((data) => {
      console.log(data);
    });
  }

  // Delete a goal
  deleteGoal(exerciseName: string) {
    let exercise = "Bench";
    this.request.deleteGoal(exercise).subscribe((data) => {
      console.log(data);
    });
  }
}
