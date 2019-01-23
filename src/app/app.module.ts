// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewMoreDirective } from './view-more.directive';


@NgModule({
  declarations: [
    AppComponent,
    ViewMoreDirective
  ],
  imports: [
    // BrowserModule
  ],
  exports:[ViewMoreDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
