import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/Shared/exercisemodel';
import { ExerciseService } from 'src/app/exercise-list/exercise.service';
import { FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
exerciseForm = new FormControl('');
// formGroup: FormGroup;
  constructor(public exerciseService: ExerciseService, formBuilder: FormBuilder ){}
  // ngOnInit() {
  //   this.formGroup = this.formBuilder.group({
  //     name: ['John Doe', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
  //   });
  // }
  ngOnInit(): void {

  }
    addItem() {
      this.exerciseService.savedExercise()
      console.log(this.exerciseService.savedExercise())
    }


    removeItem() {
      this.exerciseService.removeExercise(1)
    }

    onSubmit() {
      console.log();
    }
  }
