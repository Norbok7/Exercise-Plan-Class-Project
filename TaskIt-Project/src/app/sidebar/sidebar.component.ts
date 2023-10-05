import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
}
