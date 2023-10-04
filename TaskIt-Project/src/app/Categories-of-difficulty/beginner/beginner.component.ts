import { Component } from '@angular/core';
import { Exercise } from 'src/main';
@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent {
exercise: Exercise[] = []

}
