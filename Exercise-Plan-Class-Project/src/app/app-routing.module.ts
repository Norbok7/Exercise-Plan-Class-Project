import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  { path: 'exercise-list', component: ExerciseListComponent },
  { path: '', component: LandingPageComponent },
  { path: 'workouts-completed', component: TallysComponent},
  { path: 'exercise-difficulty',component: SidebarComponent,
   children: [{path: ':difficulty', component: DifficultyLevelComponent},
              {path: ':core', component: SidebarComponent},
              {path: ':lower', component: SidebarComponent},
              {path: ':upper', component: SidebarComponent},
              ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
