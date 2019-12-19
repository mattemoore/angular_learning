import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Beer, Ingredients } from '../models/beer';
import { ApiStats } from '../models/apiStats';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  searchResults$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);
  apiStats$: BehaviorSubject<ApiStats> = new BehaviorSubject<ApiStats>({numCalls: 0, numCallsLeft: 0});

  constructor() { }

  async search(searchTerm: string)  {
    // TODO: Replace the fetch and convert with HTTPClient
    const searchURL = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    const response = await fetch(searchURL);
    const json = await response.json();

    // TODO: Is the service the best place to do this?
    const beers: Array<Beer> = json;
    this.searchResults$.next(beers)

    const numCalls: number = Number(response.headers.get('x-ratelimit-limit'));
    const numCallsLeft: number = Number(response.headers.get('x-ratelimit-remaining'));
    const apiStats: ApiStats = {numCalls: numCalls, numCallsLeft: numCallsLeft};
    this.apiStats$.next(apiStats);
  }
}
