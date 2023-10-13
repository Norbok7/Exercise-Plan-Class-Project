import { Injectable, Component, OnInit } from '@angular/core';
import { TallysService } from './tally.service';
import { Tallys } from 'src/app/Shared/tallysmodel';
@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-tallys',
  templateUrl: './tallys.component.html',
  styleUrls: ['./tallys.component.css']
})
export class TallysComponent implements OnInit{
public myTallys: Tallys [] = [];

constructor(private tallysService: TallysService) {}

x = 0;
y = 0;
z = 0;
zz=0;


    ngOnInit(): void {
      //use the service to set local 'myexercises' array to service/global 'myExercise' array
    this.myTallys = this.tallysService.getTally();
    //list for change on the global 'myExercises' array and update the local version
    this.tallysService.tallysListChange.subscribe((tallys: Tallys[]) => {
      this.myTallys = tallys;
    })


}

}



