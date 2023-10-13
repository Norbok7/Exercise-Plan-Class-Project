import { Injectable, Component, OnInit, EventEmitter } from '@angular/core';
import { TallysService } from './tally.service';
import { Tallys } from 'src/app/Shared/tallysmodel';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-tallys',
  templateUrl: './tallys.component.html',
  styleUrls: ['./tallys.component.css']
})
export class TallysComponent implements OnInit{

  x:number;
  y:number;
  z:number;
  zz:number;
  public myTallys: Tallys [] = [
  ];
  tallysSelected = new EventEmitter<Tallys>();
  tallysListChange = new EventEmitter<Tallys[]>();
// private x$: BehaviorSubject<number>=new BehaviorSubject<number>(0);
// public x: number = this.x$.value
constructor(private tallysService: TallysService) {}

data = this.tallysService.getTally();

    ngOnInit(): void {
     // use the service to set local 'myexercises' array to service/global 'myExercise' array
    this.myTallys = this.tallysService.getTally();
    //list for change on the global 'myExercises' array and update the local version
    this.tallysService.tallysListChange.subscribe((tallys: Tallys[]) => {
      this.myTallys = tallys
      })
    }}







// updateX(x: number):void{
// this.x$.next(x);
// console.log(x);
// }





