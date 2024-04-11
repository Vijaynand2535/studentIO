import { Component } from '@angular/core';

import { Istudent } from './models/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


stdA : Array<Istudent> = [
 
]
getSObj(stdI : any){
  console.log(stdI)
  this.stdA.push(stdI)
}


  title = 'studentIO';
}
