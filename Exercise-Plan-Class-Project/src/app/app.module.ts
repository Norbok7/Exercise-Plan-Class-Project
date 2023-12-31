import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInInformationComponent } from './sidebar/log-in-information/log-in-information.component';
import { ExerciseListEditComponent } from './exercise-list/exercise-list-edit/exercise-list-edit.component';
import { SortExercisesPipe } from './Shared/pipes/sort-exercises.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ExerciseListComponent,
    DifficultyLevelComponent,
    TallysComponent,
    LandingPageComponent,
    LogInInformationComponent,
    ExerciseListEditComponent,
    SortExercisesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ExerciseListComponent, DifficultyLevelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
