import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locations: any[];

  constructor(private dataServ: DataService) { }

  display(){
    return this.dataServ.getLocations().subscribe((data: any) => {
      this.locations = data.results;
      console.log(this.locations);
    })
  }

  ngOnInit() {
    this.display();
  }

}
