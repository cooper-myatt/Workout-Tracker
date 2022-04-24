export interface IExercise {
  exerciseName: string;
  minReps : number;
  maxReps : number;
  weight : number;
  restTimeMinutes : number;
  isBodyWeight : boolean;
}

export interface Workout{
  workoutName: string,
  exercises : IExercise[]
}

export interface WorkoutList{
  workouts : Workout[]
}
