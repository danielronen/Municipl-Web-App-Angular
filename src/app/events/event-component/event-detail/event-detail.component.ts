import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Events  from '../../Events' ;
import { EventsService } from '../../events.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Observable<Events | undefined> = new Observable;
  

  constructor(private service: EventsService, private router: Router, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (!isNaN(Number(params.get('id')))){
          console.log(this.event.forEach(e => e?.code));
          return this.service.getEvent(Number(params.get('code')));
        }
        else return this.service.getEvent(0);
      })
    );
  }  

  goBack(){ 
    this.router.navigate(['/events']);
  }
}
