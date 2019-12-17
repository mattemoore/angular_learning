import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private service: SearchService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    })
  }

  search() {
    if (this.searchForm.invalid || !this.searchForm.dirty) {
      return;
    }
    let field = this.searchForm.get("searchTerm");
    let searchString = field.value;
    this.service.search(searchString);
    this.searchForm.reset({searchTerm: searchString});
    // TODO:
    // Use some type of Observable to send search result updates to beer-list-component
    // Do we do that here or in the service?
  }
}
