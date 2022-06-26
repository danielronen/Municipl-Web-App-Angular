import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EVENTS } from './dummy-data-events';
import Events from './Events';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  // A function to return the students array:
  getEvents(): Observable<Events[]> {
    return of(EVENTS);
  }


  // pipe vs substcribe
  getEvent(code: number | string | null) {
    return this.getEvents().pipe(
      // + - before `id` - turns a string into a number
      map((event: Events[]) => event.find((s) => s.code === code)!)
    );
  }

  getEventByCode(eventCode: number): Observable<Events | undefined> {
    return this.getEvents().pipe(
      map((events: Events[]) =>
        events.find((e) => e.code === eventCode)
      )
    );
  }
}
