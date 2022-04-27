export interface Workout {
  uid: string;
  name: string;
  date: String;
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
