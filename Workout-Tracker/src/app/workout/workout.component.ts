import { Component, OnInit } from '@angular/core';
import { IExercise } from '../workout';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
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

  workout = []
  constructor(private myworkout: ExerciseService) { }

  ngOnInit(): void {
    this.myworkout.addWorkout(this.exercise1)
    this.myworkout.addWorkout(this.exercise2)
    this.workout = this.myworkout.viewAllWorkouts()
    console.log(this.workout)
  }

}
