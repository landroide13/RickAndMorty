import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Class/character.model'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  charList = [];

  constructor(private charServ: DataService) {
    this.charServ.getCharacters().subscribe(data => {
      this.charList = data.results;
      console.log(this.charList);
    }); 
  }



}
   