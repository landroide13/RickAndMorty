import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Character } from '../Class/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacters():any{
    const chars = this.http.get<any>(APICAR)
    return chars;
  }

  getCharacter(id):any{
    return this.http.get<any>(APICAR + "/" + id)
  }


}

const APICAR = "https://rickandmortyapi.com/api/character";
