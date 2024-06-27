import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../../@core/models/character';
import { Image, getImageSize } from '../../../@core/models/marvel.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css',
})
export class HeroCardComponent {
  constructor(public router: Router) {}

  public get urlDetail(): string {
    const url = this.character.urls.find((v, i, a) => v.type == 'detail');
    if (url) return url.url;
    else return '';
  }

  public navigateDetaild(character: Character): void {
    const urlDetaild: string = `marvel/character/${character.id}`;
    console.log(urlDetaild);
    this.router.navigateByUrl(urlDetaild);
  }

  getImagePath(thumbnail: Image): string {
    return getImageSize(thumbnail);
  }

  @Input('character') character!: Character;
}
