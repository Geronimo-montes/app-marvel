import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(protected readonly searchService: SearchService) {}

  public onSearchChange($event: any): void {
    this.searchService.changeSearchQuery($event.target.value);
  }

  @Output('onSearch') onSearchEmitter: EventEmitter<string> =
    new EventEmitter();
  private destroy$: Subject<void> = new Subject<void>();
}
