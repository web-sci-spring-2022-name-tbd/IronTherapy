export interface Workout {
  uid: string;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: Set[];
}

export interface Set {
  pounds: number;
  reps: number;
}
