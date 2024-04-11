import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/std';

@Component({
  selector: 'app-std-t',
  templateUrl: './std-t.component.html',
  styleUrls: ['./std-t.component.scss']
})
export class StdTComponent implements OnInit {
 @Input() getSinfo !: Array<Istudent>
  constructor() { }

  ngOnInit(): void {
  }

}
