import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';


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
    
    this.actRoute.paramMap.subscribe(paramMap => {

      const id = paramMap.get('id');

      console.log(id);
      
      this.character = this.dataServ.getCharacter(id).subscribe((res: any) => this.character = res);

    })

  }



}
