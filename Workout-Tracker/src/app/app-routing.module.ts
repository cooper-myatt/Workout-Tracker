import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {path:'homepage', component: HomepageComponent},
  {path: 'workout', component: WorkoutComponent},
  {path: 'workout-list', component: WorkoutListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
