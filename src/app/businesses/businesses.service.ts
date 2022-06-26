import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Bussiness from './Bussiness';
import { BUSSINESSES } from './dummy-data-bussiness';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  constructor() { }

  
    // A function to return the students array:
    getBusinesses():Observable<Bussiness[]> {
      return of(BUSSINESSES);
    }
  
    // pipe vs substcribe
    getBusinesse(id: number | string){
      return this.getBusinesses().pipe(
        // + - before `id` - turns a string into a number
        map((student: Bussiness[]) => student.find((s) => s.busNum === id)!)
      );
    }
}
