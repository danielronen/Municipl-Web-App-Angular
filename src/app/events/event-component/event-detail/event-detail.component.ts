import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Events  from '../../Events' ;
import { EventsService } from '../../events.service';
import { FormsModule } from '@angular/forms';



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
          return this.service.getEventByCode(Number(params.get('code')));
        }
        else return this.service.getEventByCode(0);
      })
    );
  }  

  goBack(){
    // router.navigate() - a function that gets an array of values(parameters), 
    // and go to that URL in the website. 
    this.router.navigate(['/events']);
  }
}
