import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';
import { ModalService } from '../modal.service';
import { Beer } from '../../models/beer';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})

export class BeerlistComponent implements OnInit {

  beers: Beer[];
  searchCount: number = 0;

  constructor(private searchService: SearchService, private modalService: ModalService) { }

  ngOnInit() {
    this.searchService.searchResults$.subscribe(beers => {
      // TODO: talk to kyl about this method running at this time even though observable has not called
      //       `next()` yet...
      this.beers = beers;
      this.searchCount += 1;
    });
  }
}
