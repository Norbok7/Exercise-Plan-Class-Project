import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { LowerbodyComponent } from './Categories-of-body-exercises/lowerbody/lowerbody.component';
import { UpperbodyComponent } from './Categories-of-body-exercises/upperbody/upperbody.component';
import { CoreComponent } from './Categories-of-body-exercises/core/core.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { Exercise } from 'src/main';



const routes: Routes = [
  { path: 'exercise-list', component: ExerciseListComponent },
  { path: '', component: SidebarComponent },
  { path: 'workouts-completed', component: TallysComponent},
  { path: 'exercise-difficulty',component: DifficultyLevelComponent,
   children: [{path: ':difficulty', component: DifficultyLevelComponent},
              {path: ':bodypart', component: ExerciseListComponent},
              {path: ':bodypart', component: ExerciseListComponent},
              {path: ':bodypart', component: ExerciseListComponent},
              ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
