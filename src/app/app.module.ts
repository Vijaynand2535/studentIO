import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { StdFComponent } from './components/std-f/std-f.component';
import { StdTComponent } from './components/std-t/std-t.component';

@NgModule({
  declarations: [
    AppComponent,
    
    StdFComponent,
    StdTComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
