import { Component, OnInit, VERSION } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ExerciseService } from "../exercise-list/exercise.service";
import { BodyPart, Exercise } from "../Shared/exercisemodel";
import { ExerciseListComponent } from "../exercise-list/exercise-list.component";
@Component({
  selector: 'app-difficulty-level',
  templateUrl: './difficulty-level.component.html',
  styleUrls: ['./difficulty-level.component.css'],
})
export class DifficultyLevelComponent implements OnInit {
  coreExercises: Exercise[];
  lowerExercises: Exercise[];
  upperExercises: Exercise[];

  constructor(private exerciseService: ExerciseService, private exList: ExerciseListComponent,
    // private router: Router, //used to route inside of typescript
    private route: ActivatedRoute, //<--what were using to access current route
    ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const diffLvl = +params['difficulty'];
    })
  }




  core() {
    this.coreExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.core
    );


  }

  lower() {
    this.lowerExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.lower
    );

  }
  upper() {
    this.upperExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.upper
    );

  }
}

