import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Employee from './Employee';
import {EMPLOYEES} from '../employee/dummy-data-employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

    getEmployees():Observable<Employee[]> {
      return of(EMPLOYEES);
    }
  
    getEmployee(id: number | string){
      return this.getEmployees().pipe(
        map((student: Employee[]) => student.find((s) => s.Id === id)!)
      );
    }
}
