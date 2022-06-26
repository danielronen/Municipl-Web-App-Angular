import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EVENTS } from './dummy-data-events';
import Events from './Events';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Events[]> {
    return of(EVENTS);
  }

  getEvent(eventCode: number): Observable<Events | undefined> {
    return this.getEvents().pipe(
      map((events: Events[]) =>
        events.find((e) => e.code === eventCode)
      )
    );
  }
}
