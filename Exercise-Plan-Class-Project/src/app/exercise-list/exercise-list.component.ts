import { Component} from '@angular/core';
import { Injectable, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/main';
import { ExerciseService } from './exercise.service';
@Injectable()
@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

  export class ExerciseListComponent implements OnInit {
    @Input() exercise: Exercise;
    myExercises: Exercise[] = [];



    constructor(private exerciseService: ExerciseService) {}

      ngOnInit(): void {
        //use the service to set local 'myexercises' array to service/global 'myExercise' array
      this.myExercises = this.exerciseService.getExercises();
      //list for change on the global 'myExercises' array and update the local version
      this.exerciseService.exerciseListChange.subscribe((exercises: Exercise[]) => {
        this.myExercises = exercises;
      })
      }

      onRemoveBook(idx) {
        this.exerciseService.removeExercise(idx);
      }
    }












