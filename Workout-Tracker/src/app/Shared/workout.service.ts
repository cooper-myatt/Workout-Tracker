import { EventEmitter, Injectable } from '@angular/core';
import { IExercise, Workout, WorkoutList } from './workout.Interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
workoutListChanged = new EventEmitter();

  exercise1: IExercise = {
    exerciseName: 'Deadlift',
    minReps : 8,
    maxReps : 12,
    weight : 245,
    restTimeMinutes : 3,
    isBodyWeight : false
  }
  exercise2: IExercise = {
    exerciseName: 'Bench Press',
    minReps : 8,
    maxReps : 12,
    weight : 185,
    restTimeMinutes : 3,
    isBodyWeight : false
  }

  workout1 : Workout= {
    workoutName : 'Test 1',
    exercises : [this.exercise1, this.exercise2]
  }
  workout2 : Workout= {
    workoutName : 'Test 2',
    exercises : [this.exercise1, this.exercise2]
  }

  workoutList : WorkoutList = {
    workouts : [this.workout1 , this.workout2]
  }
  constructor() { }
  test(){
    console.log(this.workoutList)
  }
  viewWorkout(loc : number){
    let workout = this.workoutList.workouts.slice(loc, loc+1)
    return workout[0]
    }
  viewWorkoutList(){
    let myList =[];
    this.workoutList.workouts.forEach(element => {
      myList.push(element.workoutName);
    });
    return myList;
  }

  removeWorkout(loc : number){
    this.workoutList.workouts.splice(loc, loc+1)
    this.workoutListChanged.emit(this.viewWorkoutList());
  }

  addWorkout(wktName : string){
    let workout = {
      workoutName : wktName,
      exercises : []
    }

    this.workoutList.workouts.push(workout)
    this.workoutListChanged.emit(this.viewWorkoutList());
  }
  editWorkoutName(wktName : string, loc : number){
    this.workoutList.workouts[loc].workoutName = wktName;
    this.workoutListChanged.emit(this.viewWorkoutList());
  }

/*
  addExercise(ex : IExercise){
    this.workout.push(ex);
  }
  removeExercise(loc : number){
    this.workout.splice(loc);
  }
  viewExercise(loc : number){
    this.workout.slice(loc, loc+1);
  }
  viewAllExercises(){
    return this.workout.slice();
  }*/

}


