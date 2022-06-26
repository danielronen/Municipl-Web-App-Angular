import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponentComponent } from './event-component/event-component.component';
import { EventDetailComponent } from './event-component/event-detail/event-detail.component';

// const routes: Routes = [
//   {path:'events', component:EventComponentComponent}, 
//   {path:'events/:code', component: EventDetailComponent}
  
// ];

const routes: Routes = [
  {path:'events', component:EventComponentComponent}, 
  {path:'event/:code', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
