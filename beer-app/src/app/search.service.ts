import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(searchTerm: string) {
    console.log(searchTerm);
    // TODO: use the Angular HTTPClient to make the call and return results etc.
    //     let searchUrl = `${apiUrl}?beer_name=${searchTerm}`
    //     const response = await fetch(searchUrl);
    //     const json = await response.json();
    //     const headers = await response.headers;
    //     alert("Clicked!"); return;
    //     // dispatch('gotBeers', {
    //     //     json: json,
    //     //     headers: headers
    //     // });
  }
}
