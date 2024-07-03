import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  CharacterModel,
  ResponseApiMarvel,
} from '../../@core/data/character.model';
import { Character } from '../../@core/models/character';
import { FiltersParams } from '../../@core/models/marvel.model';
import { LoadingComponent } from '../../@theme/components/loading/loading.component';
import { LoadingService } from '../../@theme/components/loading/loading.service';
import { SearchService } from '../../@theme/components/search-module/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    protected readonly characterService: CharacterModel,
    protected readonly searchService: SearchService,
    protected readonly loadingService: LoadingService,
    protected readonly ref: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.searchService.currentSearchQuery
      .pipe(takeUntil(this.destroy$))
      .subscribe((query) => {
        this.qryCharacter.nameStartsWith = query;
        this.qryCharacter.offset = 0;
        this.paginate = { currentPage: 1, countPage: 1 };
        this.getCharacters();
      });
  }

  getCharacters() {
    const { id } = this.loadingService.create(this.ref, LoadingComponent);
    this.characterService
      .getCharacters$(this.qryCharacter)
      .pipe(takeUntil(this.destroy$))
      .subscribe((characters: ResponseApiMarvel) => {
        console.log(characters);
        this._characters = <Character[]>characters.data.results;
        this.totalResults = characters.data.total;

        this.paginate.countPage =
          Math.floor(characters.data.total / characters.data.limit) + 1;
        this.paginate.currentPage = Math.floor(
          (characters.data.offset + characters.data.limit) /
            characters.data.limit
        );

        this.loadingService.close(id);
      });
  }

  onSearchChange($event: any) {
    this.searchService.changeSearchQuery($event.target.value);
  }

  changePage($event: number) {
    this.paginate.currentPage = $event;
    if (this.qryCharacter.limit) {
      this.qryCharacter.offset =
        this.qryCharacter.limit * $event - this.qryCharacter.limit;
    }
    this.getCharacters();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get characters(): Observable<Character[] | []> {
    return new Observable((obs) => obs.next(this._characters));
  }

  private destroy$: Subject<void> = new Subject<void>();
  public _characters: Character[] = [];
  public totalResults: number = 0;
  public qryCharacter: FiltersParams = {
    name: '',
    nameStartsWith: '',
    orderBy: ['name'],
    limit: 24,
    offset: 0,
  };

  public paginate = { currentPage: 1, countPage: 1 };
}
