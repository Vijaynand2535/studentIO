import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/models/std';

@Component({
  selector: 'app-std-f',
  templateUrl: './std-f.component.html',
  styleUrls: ['./std-f.component.scss']
})
export class StdFComponent implements OnInit {

@Output() stdEmit : EventEmitter<Istudent> = new EventEmitter<Istudent>()

fname !: string
lname !: string
email !: string
contact !: string


  constructor() { }

  ngOnInit(): void {
  }
  onAddSinfo(){
    if(this.fname && this.lname && this.email && this.contact){
    let newObj: Istudent = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      contact: +this.contact
    }
      console.log(newObj)
      this.fname = this.lname = this.email =this.contact = '';
      this.stdEmit.emit(newObj)
    }
  }
}
