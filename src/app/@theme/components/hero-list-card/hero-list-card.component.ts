import { Component, Input } from '@angular/core';
import { Character } from '../../../@core/models/character';

@Component({
  selector: 'app-hero-list-card',
  templateUrl: './hero-list-card.component.html',
  styleUrl: './hero-list-card.component.css',
})
export class HeroListCardComponent {
  @Input('characters') characters: Character[] | null = [];
}
