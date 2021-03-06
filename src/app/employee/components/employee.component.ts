import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees!: Observable<Employee[]>

  constructor(private service: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.route.paramMap.pipe(
      switchMap(() => {
        return this.service.getEmployees();
      })
    )
  }

}
