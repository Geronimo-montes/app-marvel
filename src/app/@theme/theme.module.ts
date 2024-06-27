import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComicListComponent,
  HeroCardComponent,
  HeroDetailComponent,
  HeroListCardComponent,
  PaginationComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS: any[] = [
  HeroCardComponent,
  HeroDetailComponent,
  PaginationComponent,
  ComicListComponent,
  HeroListCardComponent,
];

const MODULES: any[] = [ReactiveFormsModule, FormsModule, RouterModule];

const PIPES: any[] = [];

const DIRECTIVES: any[] = [];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
    };
  }
}
