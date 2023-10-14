import { Component, OnInit, Input} from '@angular/core';
import { Exercise } from 'src/main';
import { TallysService } from './tallys/tally.service';
import { Tallys } from '../Shared/tallysmodel';



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


constructor(private tallysService: TallysService) {

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
return this.myExercises
}
woCompleted(){

  //when you come back make this be looped over in order to display for more info look at your ex list loop

}
}
