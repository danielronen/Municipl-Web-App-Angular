import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BusinessesService } from '../businesses.service';
import Bussiness from '../Bussiness';

@Component({
  selector: 'app-business-component',
  templateUrl: './business-component.component.html',
  styleUrls: ['./business-component.component.css']
})
export class BusinessComponentComponent implements OnInit {

  bussinesses!: Observable<Bussiness[]>

  constructor(private service: BusinessesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bussinesses = this.route.paramMap.pipe(
      switchMap(() => {
        return this.service.getBusinesses();
      })
    )
  }

}
