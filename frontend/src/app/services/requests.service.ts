import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Workout } from './../interfaces/workout';
import { Goal } from './../interfaces/goal';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  // Subscribe to the return of this method to access the values in the observable
  // Get all exercises
  getExercises(): Observable<string[]> {
    let url: string = 'http://localhost:3000/exercises';

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.get<string[]>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
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

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.get<Goal[]>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Get a specific goal for a user
  getGoal(exerciseName: string): Observable<Goal> {
    let url: string = `http://localhost:3000/goals/${exerciseName}`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.get<Goal>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Post a new goal for a user
  postGoal(goal: Object): Observable<string> {
    let url: string = 'http://localhost:3000/goals';

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.post<string>(url, goal, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Delete a goal for a user
  deleteGoal(exerciseName: string): Observable<string> {
    let url: string = `http://localhost:3000/goals/${exerciseName}`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.delete<string>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }
}
