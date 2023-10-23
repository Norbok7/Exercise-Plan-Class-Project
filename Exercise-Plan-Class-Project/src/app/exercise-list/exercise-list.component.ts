import { Component} from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { Exercise } from '../Shared/exercisemodel';
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

    }












