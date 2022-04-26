import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Workout, Exercise } from './../interfaces/workout';
import { Goal } from './../interfaces/goal';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient, private authService: AuthService) { }

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
    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.get<Workout[]>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Get a specific workout for a user
  getWorkout(workoutName: string): Observable<Workout> {
    let url: string = `http://localhost:3000/workouts/${workoutName}`;

    // return this.http.get<Workout>(url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // need to put the auth header in here

    //   },
    // });
    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.get<Workout>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }
  // Get a specific workout for a user
  postWorkout(workoutName: String): Observable<Workout> {
    let url: string = `http://localhost:3000/workouts/${workoutName}`;

    // return this.http.get<Workout>(url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // need to put the auth header in here

    //   },
    // });
    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.post<Workout>(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }


  // Update a goal for a user
  updateExercise(goal: Goal): Observable<string> {
    let url: string = `http://localhost:3000/goals/${goal.exercise}`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.put<string>(url, goal, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Update a sets for a user
  updateSet(name: string, exercise_name: string, update: { pounds: Number, reps: Number}): Observable<{message: string, exercise: Exercise}> {
    let url: string = `http://localhost:3000/workouts/`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.put<{message: string, exercise: Exercise}>(url, {update: update, exercise_name: exercise_name, name: name} , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Delete a set from a specific exercise
  deleteSet(name: string, exercise_name: string, update: Exercise[]): Observable<string> {
    let url: string = `http://localhost:3000/workouts/deleteSet`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.put<string>(url, {update: update, exercise_name: exercise_name, name: name} , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
  }

  // Delete an exercise
  deleteExercise(workout: string, exercise: string) {
    let url: string = `http://localhost:3000/workouts/deleteExercise?name=${workout}&exercise=${exercise}`;

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

  // Update a sets for a user
  AddExercise(name: string, exercise_name: string): Observable<{message: string, exercise: Exercise}> {
    let url: string = `http://localhost:3000/workouts/addExercise`;

    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        return this.http.put<{message: string, exercise: Exercise}>(url, {exercise_name: exercise_name, name: name} , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      })
    );
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
