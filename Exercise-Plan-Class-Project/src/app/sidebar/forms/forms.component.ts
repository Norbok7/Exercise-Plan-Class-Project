import { Component, OnInit } from '@angular/core';
import { Tallys } from 'src/app/Shared/tallysmodel';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  constructor(private tallys: Tallys) {}
    onSubmit() {
      console.log(this.tallys.name);
    }

ngOnInit(): void {
    
}
}
