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
import { ClickToShow } from './Directive/Click.directive';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
// import { FormsComponent } from './sidebar/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UpperbodyComponent,
    LowerbodyComponent,
    CoreComponent,
    ExerciseListComponent,
    ClickToShow,
    DifficultyLevelComponent,
    TallysComponent,
    // FormsComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ExerciseListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
