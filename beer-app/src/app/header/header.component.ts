import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  searchTerm: string = "Hops";
  constructor(private service: SearchService) { }

  ngOnInit() {
  }


  search() {
    this.service.search(this.searchTerm)
    // TODO:
    // Use some type of Observable to send search result updates to list component
    // Do we do that here or in the service?
  }
}
