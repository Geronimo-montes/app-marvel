import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Injectable()
export class SearchService {
  private searchQuerySource = new BehaviorSubject<string>('');

  currentSearchQuery = this.searchQuerySource
    .asObservable()
    .pipe(debounceTime(1000));

  changeSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
