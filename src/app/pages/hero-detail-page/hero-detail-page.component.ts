import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterModel } from '../../@core/data/character.model';
import { LoadingService } from '../../@theme/components/loading/loading.service';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrl: './hero-detail-page.component.css',
})
export class HeroDetailPageComponent implements OnInit {
  constructor(
    protected router: ActivatedRoute,
    protected readonly characterService: CharacterModel,
    protected readonly loadingService: LoadingService,
    protected readonly ref: ViewContainerRef
  ) {}

  ngOnInit() {
    this.idCharacter = this.router.snapshot.params['id'];
    // const params: ParamCharacterGetObj = {
    //   idCharacter: id,
    //   nameRelObj: 'comics',
    //   filters: {},
    // };

    // this.characterService
    //   .getCharacterObjById$(params)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: any) => {
    //     this.comics = data.data.results;
    //     console.log({ comics: data });
    //   });
  }

  public idCharacter!: number;
}
