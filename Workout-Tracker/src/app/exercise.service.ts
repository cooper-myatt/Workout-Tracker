import { Injectable } from '@angular/core';
import { IExercise } from './workout';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  workoutList = [];
  constructor() { }

  addWorkout(ex){
    this.workoutList.push(ex);
  }
  removeWorkout(exLoc){
    this.workoutList.splice(exLoc);
  }
  viewWorkout(loc){
    this.workoutList.slice(loc, loc+1);
  }
  viewAllWorkouts(){
    return this.workoutList.slice();
  }
}
