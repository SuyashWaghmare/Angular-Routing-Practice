import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { MechanicalComponent } from './Department/mechanical/mechanical.component';
import { ComputerComponent } from './Department/computer/computer.component';
import { ElectronicsComponent } from './Department/electronics/electronics.component';
import { DepartmentComponent } from './Department/department/department.component';


@NgModule({
  declarations: [
    MechanicalComponent,
    ComputerComponent,
    ElectronicsComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule
  ],

  exports:
  [  
    DepartmentComponent,
     MechanicalComponent,
     ComputerComponent,
     ElectronicsComponent
  ],

})
export class CollegeModule { }
