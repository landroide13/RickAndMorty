import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../Class/character.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  character: any;

  constructor(private actRoute: ActivatedRoute, private dataServ: DataService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('profile');
      this.character = this.dataServ.getCharacter(Number(id));
      console.log(this.character)
    })
  }



}
