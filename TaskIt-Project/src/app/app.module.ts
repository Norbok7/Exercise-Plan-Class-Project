import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './Shared/core/core.component';
import { LowerComponent } from './Shared/lower/lower.component';
import { UpperComponent } from './Shared/upper/upper.component';
import { FooterComponent } from './footer/footer.component';
import { ExerciseListComponent } from './Shared/exercise-list/exercise-list.component';
import { HeaderComponent } from './Header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeginnerComponent } from './Categories-of-difficulty/beginner/beginner.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LowerComponent,
    UpperComponent,
    FooterComponent,
    HeaderComponent,
    ExerciseListComponent,
    SidebarComponent,
    BeginnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
