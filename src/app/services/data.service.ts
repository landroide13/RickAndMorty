import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Class/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get<any>(APICAR);
  }


}

const APICAR = "https://rickandmortyapi.com/api/character";
