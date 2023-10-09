import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-difficulty-level',
  templateUrl: './difficulty-level.component.html',
  styleUrls: ['./difficulty-level.component.css']
})
export class DifficultyLevelComponent implements OnInit {
  name = "Angular " + VERSION.major;
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("e");
  }





  onBegUpperBodyWorkout(){
    parent.addEventListener('click', this.onBegUpperBodyWorkout);
    document.getElementById('e').innerHTML = ' <br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
    document.getElementById('upper').style.display='block'
    document.getElementById('lower').style.display='none'
    document.getElementById('core').style.display='none'
    this.goDown1();
    }
    onBegLowerBodyWorkout(){
      parent.addEventListener('click', this.onBegLowerBodyWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
      document.getElementById('lower').style.display='block'
      document.getElementById('upper').style.display='none'
      document.getElementById('core').style.display='none'
      this.goDown1();
    }
    onBegCoreWorkout(){
      parent.addEventListener('click', this.onBegCoreWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an beginner workout try 2-3 sets of 8-10 repetitions.  Make sure to ask questions, or look things up to make sure you are comfortable.'
      document.getElementById('core').style.display='block'
      document.getElementById('lower').style.display='none'
      document.getElementById('upper').style.display='none'
      this.goDown1();

    }
    onItermUpperBodyWorkout(){
      parent.addEventListener('click', this.onItermUpperBodyWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
      document.getElementById('upper').style.display='block'
      document.getElementById('lower').style.display='none'
      document.getElementById('core').style.display='none'
      this.goDown1();

      }
      onItermLowerBodyWorkout(){
        parent.addEventListener('click', this.onItermLowerBodyWorkout);
        document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
        document.getElementById('lower').style.display='block'
        document.getElementById('upper').style.display='none'
        document.getElementById('core').style.display='none'
        this.goDown1();
      }
      onItermCoreWorkout(){
        parent.addEventListener('click', this.onItermCoreWorkout);
        document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
        document.getElementById('core').style.display='block'
        document.getElementById('lower').style.display='none'
        document.getElementById('upper').style.display='none'
        this.goDown1();
      }
    onAdvUpperBodyWorkout(){
      parent.addEventListener('click', this.onAdvUpperBodyWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
      document.getElementById('upper').style.display='block'
      document.getElementById('lower').style.display='none'
      document.getElementById('core').style.display='none'

      this.goDown1();
  }
  onAdvLowerBodyWorkout(){
    parent.addEventListener('click', this.onAdvLowerBodyWorkout);
    document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
    document.getElementById('lower').style.display='block'
    document.getElementById('upper').style.display='none'
    document.getElementById('core').style.display='none'
    this.goDown1();
  }
  onAdvCoreWorkout(){
    parent.addEventListener('click', this.onAdvCoreWorkout);
    document.getElementById('e').innerHTML = '<br><br><br><br><br>For an advanced workout try 4-5 sets of 8-12 repetitions, also increase weight by 5 pounds or 5% until near failure is achieved by repitition 12.'
    document.getElementById('core').style.display='block'
    document.getElementById('lower').style.display='none'
    document.getElementById('upper').style.display='none'
    this.goDown1();
  }

}
