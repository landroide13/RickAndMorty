import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../Class/character.model'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  charList: any;

  constructor(private charServ: DataService, private router: Router) {
    this.charServ.getCharacters().subscribe((data:any) => {
      this.charList = data.results;
      console.log(this.charList);
    }); 
  }



}
   