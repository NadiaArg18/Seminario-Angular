import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cream } from './cream-list/Cream';

const URL = 'https://6345615a39ca915a69fd59c3.mockapi.io/cream';

@Injectable({
  providedIn: 'root'
})
export class CreamDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cream[]>{
    return this.http.get<Cream[]>(URL)
      .pipe(
        tap((creams: Cream[]) => creams.forEach(cream => cream.quantity = 0))
      );

  }
}
