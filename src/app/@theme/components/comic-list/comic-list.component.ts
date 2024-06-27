import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {
  CharacterModel,
  ResponseApiMarvel,
} from '../../../@core/data/character.model';
import { Comic } from '../../../@core/models/comic';
import {
  Image,
  ImageSizePortrait
} from '../../../@core/models/marvel.model';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.css',
})
export class ComicListComponent implements OnInit, OnDestroy {
  constructor(
    protected readonly charapterService: CharacterModel,
    protected readonly loadingService: LoadingService,
    protected readonly ref: ViewContainerRef
  ) {}
  ngOnInit(): void {
    const { id } = this.loadingService.create(this.ref, LoadingComponent);

    this.calculateDisplayCount();
    this.charapterService
      .getCharacterObjById$(this.idCharacter, 'comics')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ResponseApiMarvel) => {
        this.comics = <Comic[]>data.data.results;
        this.loadingService.close(id  );
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getImagePath(thumbnail: Image): string {
    if (window.matchMedia('(max-width: 576px)').matches) {
      return `${thumbnail.path}/${ImageSizePortrait.portrait_small}.${thumbnail.extension}`;
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      return `${thumbnail.path}/${ImageSizePortrait.portrait_medium}.${thumbnail.extension}`;
    } else if (window.matchMedia('(max-width: 992px)').matches) {
      return `${thumbnail.path}/${ImageSizePortrait.portrait_xlarge}.${thumbnail.extension}`;
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
      return `${thumbnail.path}/${ImageSizePortrait.portrait_fantastic}.${thumbnail.extension}`;
    } else if (window.matchMedia('(max-width: 1400px)').matches) {
      return `${thumbnail.path}/${ImageSizePortrait.portrait_uncanny}.${thumbnail.extension}`;
    } else {
      return `${thumbnail.path}.${thumbnail.extension}`;
    }
  }

  private destroy$: Subject<void> = new Subject<void>();
  @Input('idCharacter') idCharacter!: number;
  public comics: Comic[] = [];

  currentIndex = 0;
  displayCount = 5; // Número de cómics a mostrar

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateDisplayCount();
  }

  calculateDisplayCount() {
    const containerWidth =
      document.querySelector('.container')?.clientWidth || 0;
    const cardWidth = 120; // Ancho de cada tarjeta
    this.displayCount = Math.floor(containerWidth / cardWidth);
  }

  get displayedComics() {
    return this.comics.slice(
      this.currentIndex,
      this.currentIndex + this.displayCount
    );
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.comics.length - this.displayCount) {
      this.currentIndex++;
    }
  }

  onMouseEnter() {
    // Lógica adicional para manejar el mouse sobre las imágenes
  }

  onMouseLeave() {
    // Lógica adicional para manejar el mouse fuera de las imágenes
  }
}
