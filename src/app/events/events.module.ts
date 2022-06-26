import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponentComponent } from './event-component/event-component.component';
import { EventDetailComponent } from './event-component/event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { EventsRoutingModule } from './events-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventComponentComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EventsRoutingModule,
    FormsModule
  ],
  exports: [
    EventComponentComponent
  ]
})
export class EventsModule { }
