import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upperbody',
  templateUrl: './upperbody.component.html',
  styleUrls: ['./upperbody.component.css']
})
export class UpperbodyComponent {
   exercise = document.getElementById('exercise')
  @Output() exerciseLists = new EventEmitter<String>();

  onExercise(exercise: string){
    this.exerciseLists.emit(exercise);
  }
}
