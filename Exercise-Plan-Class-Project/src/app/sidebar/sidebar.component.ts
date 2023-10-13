import { Component, OnInit, Input} from '@angular/core';
import { Exercise } from 'src/main';
import { Tallys } from '../Shared/tallysmodel';
import { TallysService } from './tallys/tally.service';
import { Observable } from 'rxjs';
type MyNum = number | Observable<number>;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
  @Input() exercise: Exercise;
  myExercises: Exercise[] = [];
  myTallys: TallysService
  public x: MyNum;
  public y: MyNum;
  public z: MyNum;
  public zz: MyNum;


constructor(private tallysService: TallysService) {
  this.x = this.tallysService.x;
  this.y = this.tallysService.y;
  this.z = this.tallysService.z;
  this.zz = this.tallysService.zz;
}
ngOnInit():void{
  this.tallysService.x.subscribe(x=>{
    this.x = x;
  })
  // this.ngOnInit() {
  //   this.x,this.y,this.z,this.zz;
  // }
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

  begWoComplete(x,zz ){
    this.tallysService.workoutCompleteB();

  }
  itermWoComplete(y,zz){
    this.tallysService.workoutCompleteI();
  }
  advWoComplete(z, zz){
    this.tallysService.workoutCompleteA();
  }
exList(){
return this.myExercises
}
woCompleted(){

  //when you come back make this be looped over in order to display for more info look at your ex list loop

}
}
