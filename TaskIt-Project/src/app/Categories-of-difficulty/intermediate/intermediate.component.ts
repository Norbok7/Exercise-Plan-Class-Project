import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.css']
})
export class IntermediateComponent implements OnInit {

  name = "Angular " + VERSION.major;
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("e");
  }

  goDown2() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("targetGreen").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goDown3() {
    this.router.navigate([], { fragment: "targetBlue" });
  }

  onUpperBodyWorkout(){
    parent.addEventListener('click', this.onUpperBodyWorkout);
    document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
    document.getElementById('upper').style.display='block'
    document.getElementById('lower').style.display='none'
    document.getElementById('core').style.display='none'
    this.goDown1();

    }
    onLowerBodyWorkout(){
      parent.addEventListener('click', this.onLowerBodyWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
      document.getElementById('lower').style.display='block'
      document.getElementById('upper').style.display='none'
      document.getElementById('core').style.display='none'
      this.goDown1();
    }
    onCoreWorkout(){
      parent.addEventListener('click', this.onCoreWorkout);
      document.getElementById('e').innerHTML = '<br><br><br><br><br>For an intermediate workout try 3-4 sets of 8-12 repetitions. The biggest difference between you and advanced lifter is the number of sets you do!'
      document.getElementById('core').style.display='block'
      document.getElementById('lower').style.display='none'
      document.getElementById('upper').style.display='none'
      this.goDown1();
    }
}
