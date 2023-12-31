import { Component, OnInit, Input} from '@angular/core';
import { Exercise } from 'src/main';
import { TallysService } from './tallys/tally.service';
import { Tallys } from '../Shared/tallysmodel';
import { ExerciseListEditComponent } from '../exercise-list/exercise-list-edit/exercise-list-edit.component';
import { DifficultyLevelComponent } from '../difficulty-level/difficulty-level.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent{
  @Input() exercise: Exercise;
  myExercises: Exercise[] = [];
  myTallys: TallysService
 x=0;
 y=0;
 z=0;
 zz=0;


constructor(private tallysService: TallysService, private difficulty: DifficultyLevelComponent) {

}
ngOnInit() {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1200) {
      // Hide the sidebar
      document.getElementById('wrapper').style.display = 'none';
    } else {
      // Show the sidebar
      document.getElementById('wrapper').style.display = 'block';
    }
  });
}
// ngOnInit() {
//   this.tallysService.dataChange.subscribe((data) => {
//   this.x = data;
//   });
//   }
// ngOnInit():void{
//   const spNum: MyNum = this.x;
//  spNum.subscribe(x=>{
//   this.x = x;
//  })
//   this.x.subscribe(x=>{
//     this.x = x;
//   })
  // this.ngOnInit() {
  //   this.x,this.y,this.z,this.zz;
  // }



  begWoComplete( ){
    // parent.addEventListener('click', this.begWoComplete);
    this.tallysService.workoutCompleteB();
    this.x++;
    this.zz++;
  }
  itermWoComplete(){
    // parent.addEventListener('click', this.itermWoComplete);
    this.tallysService.workoutCompleteI();
    this.y++;
    this.zz++;
  }
  advWoComplete(){
    // parent.addEventListener('click', this.advWoComplete);
    this.tallysService.workoutCompleteA();
    this.z++;
    this.zz++;
  }
exList(){
  // this.difficulty.lowerExercises.splice(0, this.difficulty.lowerExercises.length); // This will all the last element from the array.
  // this.difficulty.coreExercises.splice(0, this.difficulty.coreExercises.length);
  // this.difficulty.upperExercises.splice(0, this.difficulty.upperExercises.length);
return this.myExercises
}
woCompleted(){

  //when you come back make this be looped over in order to display for more info look at your ex list loop

}
}
