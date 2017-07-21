import { Component, OnInit } from '@angular/core';
import { SearchResult } from './you-tube-search.model';

// Youtube v3 search API: https://developers.google.com/youtube/v3/docs/search/list

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
