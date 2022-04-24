import { Component, Input, OnInit } from '@angular/core';
import { Workout, IExercise } from '../Shared/workout.Interface';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  @Input () workout: Workout;
  constructor() { }

  ngOnInit(): void {

  }

}
