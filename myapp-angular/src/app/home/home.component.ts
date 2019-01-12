import { PersonService } from '../services/person.services';
import Person from '../models/person.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  People: Person[];

  ngOnInit(): void {
    this.personService.getPersons()
      .subscribe(persons => {
        this.People = persons;
      });
  }

}
