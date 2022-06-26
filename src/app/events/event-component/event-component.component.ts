import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Events from '../Events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  events!: Observable<Events[]>
  selectedId: any = "";


  constructor(private service: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.events = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('code');
        return this.service.getEvents();
      })
    )
  }

}
