import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../Class/character.model';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  character;

  id: any;

  constructor(private actRoute: ActivatedRoute, private dataServ: DataService) { }

  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    
    this.actRoute.paramMap.subscribe(paramMap => {
      
      this.character = this.dataServ.getCharacter(this.id);

      this.dataServ.getCharacter(this.id).subscribe((res:any) => {
        console.log(res)
        this.character = res;
      });

      console.log(" Ext " + this.character + this.id);
    })

    
    // this.dataServ.getCharacter(this.id).subscribe((res:any) => {
    //   console.log(res)
    //   this.character = res;
    // });

  }



}
