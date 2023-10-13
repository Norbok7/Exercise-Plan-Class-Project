import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tallys } from 'src/app/Shared/tallysmodel';

@Injectable({
  providedIn: "root"
})

export class TallysService {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public zz: number = 0;
  private myTally: Tallys [] = [

  ]
  tallySelected = new EventEmitter<Tallys>();
  tallysListChange = new EventEmitter<Tallys[]>();



// workoutsTally: number[] = [this.x,this.y,this.z,this.zz];
// getX():Observable<number>{
// return new Observable<number>(subscriber=>{
//   subscriber.next(this.x);
// })


getTally(){

  console.log(this.myTally);
  document.getElementById('homePic').style.display='none'
  return this.myTally.slice();
  }
  workoutCompleteB(){

    console.log(this.x)
    this.x++;
    this.zz++;
  }
  workoutCompleteI(){

    this.y++;
    this.zz++;
  }
  workoutCompleteA(){
    this.z++;
    this.zz++;
  }
}

