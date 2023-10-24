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
    
    constructor(private exerciseService: ExerciseService) {}

      ngOnInit(): void {
        //use the service to set local 'myexercises' array to service/global 'myExercise' array
      this.myExercises = this.exerciseService.getExercises();
      //list for change on the global 'myExercises' array and update the local version
      this.exerciseService.exerciseListChange.subscribe((exercises: Exercise[]) => {
        this.myExercises = exercises;

        // this.filteredExercises = this.myExercises.filter(
        //   (exercise) => exercise.bodypart === BodyPart.lower
        // );
        // this.filteredExercises = this.exerciseService.myExercises.filter(
        //   (exercise) => exercise.bodypart === BodyPart.upper
        // );
        // this.filteredExercises = this.exerciseService.myExercises.filter(
        //   (exercise) => exercise.bodypart === BodyPart.core
        // );
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
        const filteredExercises = this.exerciseService.myExercises.filter(
          (exercises) => exercises.bodypart === BodyPart.core
        );
        return console.log(filteredExercises);
      }

      lower() {
        // return this.filteredExercises;
        var filteredExercises = this.exerciseService.myExercises.filter(
          (exercises) => exercises.bodypart === BodyPart.lower
        );
        return console.log(filteredExercises);
      }
      upper() {
        // return this.filteredExercises;
        var filteredExercises = this.exerciseService.myExercises.filter(
          (exercises) => exercises.bodypart === BodyPart.upper
        );
        return console.log(filteredExercises);
      }
    }















