import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './BasicComponents/about-us/about-us.component';
import { DashBoardComponent } from './BasicComponents/dash-board/dash-board.component';
import { ContactUsComponent } from './BasicComponents/contact-us/contact-us.component';
import { CollegeModule } from './College/college/college.module';

const routes: Routes = [
  {
    path : 'dashboard', component : DashBoardComponent
  },
  {
    path : 'contactus', component : ContactUsComponent
  },
  {
    path : 'aboutus', component : AboutUsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
