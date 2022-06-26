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
  selectedId: any = "";


  constructor(private service: BusinessesService, private route: ActivatedRoute) { }

  // call the function when a class is loaded:
  // paramMap - list of all params in URL
  // localhost:4200/student/:id
  ngOnInit(): void {

    // this.students will hold the value that returns from getStudents() in service. 
    this.bussinesses = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('id');
        return this.service.getBusinesses();
      })
    )
  }

}
