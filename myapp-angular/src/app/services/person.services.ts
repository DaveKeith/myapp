import Person from '../models/person.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {

  api_url = 'http://localhost:3000';
  personUrl = `${this.api_url}/api`;

  constructor(
    private http: HttpClient
  ) { }

  getPersons(): Observable<Person[]> {
    return this.http.get(this.personUrl)
    .pipe(map(res  => {
      return res['data'].docs as Person[];
    }));
  }
}
