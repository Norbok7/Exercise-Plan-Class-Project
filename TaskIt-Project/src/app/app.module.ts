import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeginnerComponent } from './Categories-of-difficulty/beginner/beginner.component';
import { IntermediateComponent } from './Categories-of-difficulty/intermediate/intermediate.component';
import { AdvanedComponent } from './Categories-of-difficulty/advaned/advaned.component';
import { UpperbodyComponent } from './Categories-of-body-exercises/upperbody/upperbody.component';
import { LowerbodyComponent } from './Categories-of-body-exercises/lowerbody/lowerbody.component';
import { CoreComponent } from './Categories-of-body-exercises/core/core.component';
import { HeaderComponent } from './header/header.component';
import { ExerciselistComponent } from './Shared/exerciselist/exerciselist.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    BeginnerComponent,
    IntermediateComponent,
    AdvanedComponent,
    UpperbodyComponent,
    LowerbodyComponent,
    CoreComponent,
    HeaderComponent,
    ExerciselistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
