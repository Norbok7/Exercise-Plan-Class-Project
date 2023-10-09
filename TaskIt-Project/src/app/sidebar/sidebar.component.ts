import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

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
  // hideAll(){
  //   parent.addEventListener('click', this.hideAll);
  // document.getElementById('exerciseList').style.display='block'
  // document.getElementById('core').style.display='block'
  // document.getElementById('lower').style.display='block'
  // document.getElementById('upperBody').style.display='block'
  // document.getElementById('advanced').style.display='block'
  // document.getElementById('intermediate').style.display='block'
  // document.getElementById('beginner').style.display='block'
  // };
  // ngOnInit() {
  //    let items = this.exerciseService.navigateTo();
  //   this.itemz.push(items);
  //   console.log(items);
  //   // console.log(this.exerciseService.exercise)
  //   // return this.exerciseService.exercise
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
}
