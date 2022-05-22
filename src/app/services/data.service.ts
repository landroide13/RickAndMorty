import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Class/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //<Character[]>

  getCharacters():any{
    const chars = this.http.get<any>(APICAR)
    return chars;
  }

  getCharacter(id): Observable<Character>{
    return this.http.get<Character>(APICAR + "/" + id)
  }


}

const APICAR = "https://rickandmortyapi.com/api/character";
