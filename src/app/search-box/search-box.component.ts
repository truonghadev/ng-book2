import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../you-tube-search/you-tube-search.model';
import { YouTubeService } from '../you-tube-search/you-tube-search.service';

@Component({
  outputs: ['loading', 'results'],
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeService: YouTubeService, private el: ElementRef) { }

  ngOnInit(): void{
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) //not emit any search strings for which the length is less than 1
      .debounceTime(250) //throttle requests that come in faster than 250ms
      .do(() => this.loading.next(true)); // enable loading
  }

}
