import { Component, OnInit, Input} from '@angular/core';
import { Exercise } from 'src/main';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @Input() exercise: Exercise;
  myExercises: Exercise[] = [];
  x = 0;
  y = 0;
  z = 0;
  zz=0;
constructor() {}
ngOnInit() {}
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

  beginner(){
    parent.addEventListener('click', this.beginner);
    document.getElementById('beginner').style.display='block'
  }
  intermediate(){
    parent.addEventListener('click', this.intermediate);
    document.getElementById('intermediate').style.display='block'
  }
  advanced(){
    parent.addEventListener('click', this.advanced);
    document.getElementById('advanced').style.display='block'
  }

exList(){
return this.myExercises
}
}
