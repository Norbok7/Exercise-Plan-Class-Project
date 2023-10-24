import { Component, ViewChild} from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { BodyPart, Exercise } from '../Shared/exercisemodel';
import { ExerciseService } from './exercise.service';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

  export class ExerciseListComponent implements OnInit {
    @Input() exercise: Exercise;
    myExercises: Exercise[] = [];
    filteredExercises: Exercise[];

    constructor(private exerciseService: ExerciseService) {}

      ngOnInit(): void {
        this.filteredExercises = this.myExercises.filter(
          (exercise) => exercise.bodypart === BodyPart.lower
        );
        this.filteredExercises = this.myExercises.filter(
          (exercise) => exercise.bodypart === BodyPart.upper
        );
        this.filteredExercises = this.myExercises.filter(
          (exercise) => exercise.bodypart === BodyPart.core
        );
        //use the service to set local 'myexercises' array to service/global 'myExercise' array
      this.myExercises = this.exerciseService.getExercises();
      //list for change on the global 'myExercises' array and update the local version
      this.exerciseService.exerciseListChange.subscribe((exercises: Exercise[]) => {
        this.myExercises = exercises;
      })

      }
      runServiceDelete(exercise){
        this.exerciseService.deleteItem(exercise)
        console.log(exercise)
      }
      runServiceEdit(index: number){
        // this.exerciseService.editExercise(this.exercise);
        this.exerciseService.startedEditing.next(index);
      }
      core() {
        return this.filteredExercises;
      }

      lower() {
        return this.filteredExercises;
        // var filteredExercise = this.myExercises.filter(
        //   (exercises) => exercises.bodypart === BodyPart.lower
        // );
        // return filteredExercise;
      }
      upper() {
        return this.filteredExercises;
        // var filteredExercise = this.myExercises.filter(
        //   (exercises) => exercises.bodypart === BodyPart.upper
        // );
        // return filteredExercise
      }
    }















