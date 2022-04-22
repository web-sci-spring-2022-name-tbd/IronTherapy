import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Workout } from './../interfaces/workout';
import { Goal } from './../interfaces/goal';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  // Subscribe to the return of this method to access the values in the observable
  // Get all exercises
  getExercises(): Observable<string[]> {
    let url: string = 'http://localhost:3000/exercises';

    return this.http.get<string[]>(url, {
      headers: {
        'Content-Type': 'application/json',
        // need to put the auth header in here
      },
    });
  }

  // Get all the workouts for a user
  getWorkouts(): Observable<Workout[]> {
    let url: string = 'http://localhost:3000/workouts';

    return this.http.get<Workout[]>(url, {
      headers: {
        'Content-Type': 'application/json',
        // need to put the auth header in here
      },
    });
  }

  // Get a specific workout for a user
  getWorkout(workoutName: string): Observable<Workout> {
    let url: string = `http://localhost:3000/workouts/${workoutName}`;

    return this.http.get<Workout>(url, {
      headers: {
        'Content-Type': 'application/json',
        // need to put the auth header in here
      },
    });
  }

  // Get all goals for a user
  getGoals(): Observable<Goal[]> {
    let url: string = 'http://localhost:3000/goals';

    return this.http.get<Goal[]>(url, {
      headers: {
        'Content-Type': 'application/json',
        // need to put the auth header in here
      },
    });
  }

  // Get a specific goal for a user
  getGoal(exerciseName: string): Observable<Goal> {
    let url: string = `http://localhost:3000/goals/${exerciseName}`;

    return this.http.get<Goal>(url, {
      headers: {
        'Content-Type': 'application/json',
        // need to put the auth header in here
      },
    });
  }
}
