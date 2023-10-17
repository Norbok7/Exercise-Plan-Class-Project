import { Component, Input, NgModule, NgModuleDecorator } from '@angular/core';
import { Exercise } from 'src/main';
import { ExerciseService } from 'src/app/exercise-list/exercise.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, NgModel, NgForm, NgModelGroup } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
exerciseForm = new FormControl('');
  constructor(public exerciseService: ExerciseService, public exercise: Exercise, ){}

    addItem() {
      this.exerciseService.savedExercise()
    }


    removeItem() {
      this.exerciseService.removeExercise(1)
    }

    onSubmit() {
      console.log();
    }
  }
