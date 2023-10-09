import { Component, OnInit} from '@angular/core';
import { ExerciseService } from '../Shared/exercise.service';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
itemz = [];
  x = 0;
  y = 0;
  z = 0;
  zz=0;

  workoutCompleteB(){
    parent.addEventListener('click', this.workoutCompleteB)
    this.x++;
    this.zz++;
  }
  workoutCompleteI(){
    parent.addEventListener('click', this.workoutCompleteI)
    this.y++;
    this.zz++;
  }
  workoutCompleteA(){
    parent.addEventListener('click', this.workoutCompleteA)
    this.z++;
    this.zz++;
  }
  constructor(private exerciseService: ExerciseService){

  }
  ngOnInit() {
     let items = this.exerciseService.navigateTo();
    this.itemz.push(items);
    console.log(items);
    // console.log(this.exerciseService.exercise)
    // return this.exerciseService.exercise
  }

}
