import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExerciseListComponent } from 'src/app/exercise-list/exercise-list.component';
import { ExerciseService } from 'src/app/exercise-list/exercise.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  exerciseForm: FormGroup;

  constructor(private fb: FormBuilder, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  onSubmit() {
    // TODO: Submit the form data to the server
    //get form data
    console.log(this.exerciseForm.value);
    const exercise = this.exerciseForm.value;
    //create function to add exercise to [array] in services
    this.exerciseService.addExercise(exercise);
     //reset form
     this.exerciseForm.reset();
    };



  }


