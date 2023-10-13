import { Component} from '@angular/core';
import { Injectable, Input } from '@angular/core';
import { Exercise } from 'src/main';
import { ExerciseService } from './exercise.service';
@Injectable()
@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

  export class ExerciseListComponent {
    @Input() exercise: Exercise;
    myExercises: Exercise[] = [];



    constructor(private exerciseService: ExerciseService) {}

  c

      onRemoveBook(idx) {
        this.exerciseService.removeExercise(idx);
      }
    }












