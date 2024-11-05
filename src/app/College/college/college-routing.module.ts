import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Department/department/department.component';
import { MechanicalComponent } from './Department/mechanical/mechanical.component';
import { ComputerComponent } from './Department/computer/computer.component';
import { ElectronicsComponent } from './Department/electronics/electronics.component';

const routes: Routes = [
  {
    path : 'department', component : DepartmentComponent,

    children: [
      {
        path: 'mechanical',
        component: MechanicalComponent
      },
      {
        path: 'computer',
        component: ComputerComponent
      },
      {
        path: 'electronics',
        component: ElectronicsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }
