import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Employee from './Employee';
import {EMPLOYEES} from '../employee/dummy-data-employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

    // A function to return the students array:
    getEmployees():Observable<Employee[]> {
      return of(EMPLOYEES);
    }
  
    // pipe vs substcribe
    getEmployee(id: number | string){
      return this.getEmployees().pipe(
        // + - before `id` - turns a string into a number
        map((student: Employee[]) => student.find((s) => s.Id === id)!)
      );
    }
}
