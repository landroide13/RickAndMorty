import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episodes: any[];

  constructor(private dataServ: DataService) { }

  display(){
    return this.dataServ.getEpisodes().subscribe((data: any) => {
      this.episodes = data.results;
      console.log(this.episodes);
    })
  }

  ngOnInit() {
    this.display();
  }

}
