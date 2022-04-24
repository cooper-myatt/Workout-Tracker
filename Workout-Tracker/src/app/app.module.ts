import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppNavbarComponent } from './navbar/app-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkoutFormComponent } from './workout-list/workout-form/workout-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutComponent,
    ScheduleComponent,
    AppNavbarComponent,
    HomepageComponent,
    WorkoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
