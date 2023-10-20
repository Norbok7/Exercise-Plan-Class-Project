import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpperbodyComponent } from './Categories-of-body-exercises/upperbody/upperbody.component';
import { LowerbodyComponent } from './Categories-of-body-exercises/lowerbody/lowerbody.component';
import { CoreComponent } from './Categories-of-body-exercises/core/core.component';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { FormsComponent } from './sidebar/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UpperbodyComponent,
    LowerbodyComponent,
    CoreComponent,
    ExerciseListComponent,
    DifficultyLevelComponent,
    TallysComponent,
    FormsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ExerciseListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
