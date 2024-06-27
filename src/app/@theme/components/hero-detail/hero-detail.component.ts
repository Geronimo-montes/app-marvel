import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CharacterModel } from '../../../@core/data/character.model';
import { Character } from '../../../@core/models/character';
import { Image } from '../../../@core/models/marvel.model';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  constructor(
    protected readonly characterService: CharacterModel,
    protected readonly loadingService: LoadingService,
    protected readonly ref: ViewContainerRef
  ) {}

  ngOnInit() {
    const { id } = this.loadingService.create(this.ref, LoadingComponent);
    this.characterService
      .getById$(this.idCharacter)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.character = data.data.results[0];
        console.log({ character: data });
        this.loadingService.close(id);
      });
  }

  getImageSize(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public character!: Character;
  public loading: boolean = false;
  @Input('idCharacter') idCharacter!: number;
  private destroy$: Subject<void> = new Subject<void>();
}
