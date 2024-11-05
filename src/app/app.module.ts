import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './BasicComponents/dash-board/dash-board.component';
import { AboutUsComponent } from './BasicComponents/about-us/about-us.component';
import { ContactUsComponent } from './BasicComponents/contact-us/contact-us.component';
import { CollegeModule } from './College/college/college.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
