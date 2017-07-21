import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from './you-tube-search.model';

let API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
let API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export var youTubeServiceInjectables: Array<any> = [
  {provide: API_KEY, useValue: API_KEY},
  {provide: API_URL, useValue: API_URL}
];

@Injectable()
export class YouTubeService {
  constructor(private http: Http, @Inject(API_KEY) private apiKey: string, @Inject(API_URL) private apiUrl: string) {

  }

  search(query: string): Observable<SearchResult[]>{
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((res: Response) => {
        return (<any>res.json()).items.map(item => {
          console.log('item', item);
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.hight.url
          });
        });
      });
  }
}
