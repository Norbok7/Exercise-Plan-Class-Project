import { Component, OnInit, VERSION } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ExerciseService } from "../exercise-list/exercise.service";
import { BodyPart, Exercise } from "../Shared/exercisemodel";
import { ExerciseListComponent } from "../exercise-list/exercise-list.component";
@Component({
  selector: 'app-difficulty-level',
  templateUrl: './difficulty-level.component.html',
  styleUrls: ['./difficulty-level.component.css']
})
export class DifficultyLevelComponent implements OnInit {
  coreArray: Exercise[];
  lowerArray: Exercise[];
  upperArray: Exercise[];

  constructor(private exerciseService: ExerciseService, private exList: ExerciseListComponent,
    // private router: Router, //used to route inside of typescript
    private route: ActivatedRoute, //<--what were using to access current route
    ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const diffLvl = +params['difficulty'];
    })}



//   onBegUpperBodyWorkout(){
// this.exList.upper();
// this.exerciseService.myExercises
// console.log(this.exerciseService.myExercises);
//     // parent.addEventListener('click', this.onBegUpperBodyWorkout);
//     // document.getElementById('e').innerHTML = ' <br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
//     // document.getElementById('upper').style.display='block'
//     // document.getElementById('lower').style.display='none'
//     // document.getElementById('core').style.display='none'

//     }
//     onBegLowerBodyWorkout(){
// this.exList.lower();
//       // parent.addEventListener('click', this.onBegLowerBodyWorkout);
//       // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
//       // document.getElementById('lower').style.display='block'
//       // document.getElementById('upper').style.display='none'
//       // document.getElementById('core').style.display='none'

//     }
//     onBegCoreWorkout(){
// this.exList.core();
//       // parent.addEventListener('click', this.onBegCoreWorkout);
//       // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
//       // document.getElementById('core').style.display='block'
//       // document.getElementById('lower').style.display='none'
//       // document.getElementById('upper').style.display='none'


//     }
//     onItermUpperBodyWorkout(){
//       this.exList.upper();
//       // parent.addEventListener('click', this.onItermUpperBodyWorkout);
//       // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
//       // document.getElementById('upper').style.display='block'
//       // document.getElementById('lower').style.display='none'
//       // document.getElementById('core').style.display='none'


//       }
//       onItermLowerBodyWorkout(){
//         this.exList.lower();
//         // parent.addEventListener('click', this.onItermLowerBodyWorkout);
//         // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
//         // document.getElementById('lower').style.display='block'
//         // document.getElementById('upper').style.display='none'
//         // document.getElementById('core').style.display='none'

//       }
//       onItermCoreWorkout(){
//         this.exList.core();
//         // parent.addEventListener('click', this.onItermCoreWorkout);
//         // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
//         // document.getElementById('core').style.display='block'
//         // document.getElementById('lower').style.display='none'
//         // document.getElementById('upper').style.display='none'

//       }
//     onAdvUpperBodyWorkout(){
//       this.exList.upper();
//       // parent.addEventListener('click', this.onAdvUpperBodyWorkout);
//       // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
//       // document.getElementById('upper').style.display='block'
//       // document.getElementById('lower').style.display='none'
//       // document.getElementById('core').style.display='none'


//   }
//   onAdvLowerBodyWorkout(){
//     this.exList.lower();
//     // parent.addEventListener('click', this.onAdvLowerBodyWorkout);
//     // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
//     // document.getElementById('lower').style.display='block'
//     // document.getElementById('upper').style.display='none'
//     // document.getElementById('core').style.display='none'

//   }
//   onAdvCoreWorkout(){
//     this.exList.core();
//     // parent.addEventListener('click', this.onAdvCoreWorkout);
//     // document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
//     // document.getElementById('core').style.display='block'
//     // document.getElementById('lower').style.display='none'
//     // document.getElementById('upper').style.display='none'

//   }
  core() {
    let filteredExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.core
    );
    return filteredExercises

  }

  lower() {
    // return this.filteredExercises;
    let filteredExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.lower
    );
    return filteredExercises
  }
  upper() {
    // return this.filteredExercises;
    let filteredExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.upper
    );
    return filteredExercises
  }
}
