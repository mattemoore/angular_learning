import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {
  beers: Beer[];
  searchCount: number = 0;

  ngOnInit() {
    this.service.searchResults$.subscribe(beers => {
      // TODO: talk to kyl about this method running at this time even though observable has not called
      //       `next()` yet...
      this.beers = beers;
      this.searchCount += 1;
      console.log(this.searchCount)
    });
  }

  constructor(private service: SearchService) { }
}
