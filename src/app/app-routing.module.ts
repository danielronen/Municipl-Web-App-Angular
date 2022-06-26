import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponentComponent } from './businesses/business-component/business-component.component';

import { EmployeeComponent } from './employee/components/employee.component';
import { EventComponentComponent } from './events/event-component/event-component.component';
import { ResidentCardComponent } from './residents/resident-card/resident-card.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'residents', component: ResidentCardComponent},
  {path: 'events', component: EventComponentComponent},
  {path: 'businesses', component: BusinessComponentComponent},
  {path: '', redirectTo: '/', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
