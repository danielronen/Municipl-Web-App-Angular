import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Bussiness from './Bussiness';
import { BUSSINESSES } from './dummy-data-bussiness';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  constructor() { }

    getBusinesses():Observable<Bussiness[]> {
      return of(BUSSINESSES);
    }
  
    getBusinesse(id: number | string){
      return this.getBusinesses().pipe(
        map((student: Bussiness[]) => student.find((s) => s.busNum === id)!)
      );
    }
}
