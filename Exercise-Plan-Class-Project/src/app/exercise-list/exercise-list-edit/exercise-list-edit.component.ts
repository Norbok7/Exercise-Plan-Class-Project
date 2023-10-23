import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Exercise } from 'src/app/Shared/exercisemodel';
import { ExerciseService } from '../exercise.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-exercise-list-edit',
  templateUrl: './exercise-list-edit.component.html',
  styleUrls: ['./exercise-list-edit.component.css']
})
export class ExerciseListEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  selectedBodyPart = 'upper'
  bodyparts = ['UpperBody Exercise', 'LowerBody Exercise', 'Core Exercises' ]
  constructor(private fb: FormBuilder, private exerciseService: ExerciseService) { }


  ngOnInit() {
    this.subscription = this.exerciseService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    )
  }

  onSubmit(form: NgForm) {
    // TODO: Submit the form data to the server
    //get form data
    const value = form.value;
    const newExercise = new Exercise(value.bodypart, value.name, value.description);
    this.exerciseService.addExercise(newExercise);
     //reset form
    form.reset();
    //  this.reset();
     //notify
     alert('Your exercise has been succesfully submitted to the Exercise List!!!!')
    };

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  }




