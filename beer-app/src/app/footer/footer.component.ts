import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service'
import { ApiStats } from '../../models/apiStats'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  apiStats: ApiStats;

  constructor(private service: SearchService) { }

  ngOnInit() {
    this.service.apiStats$.subscribe(apiStats => this.apiStats = apiStats);
  }

}
