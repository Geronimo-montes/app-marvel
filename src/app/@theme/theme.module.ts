import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComicListComponent,
  HeroCardComponent,
  HeroDetailComponent,
  HeroListCardComponent,
  NotificationComponent,
  PaginationComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchModule } from './components/search-module/search.module';

const COMPONENTS: any[] = [
  HeroCardComponent,
  HeroDetailComponent,
  PaginationComponent,
  ComicListComponent,
  HeroListCardComponent,
  NotificationComponent,
];

const MODULES: any[] = [ReactiveFormsModule, FormsModule, RouterModule];

const EXPORTS_MODULES: any[] = [SearchModule];

const PIPES: any[] = [];

const DIRECTIVES: any[] = [];

@NgModule({
  imports: [CommonModule, ...MODULES, ...EXPORTS_MODULES],
  exports: [
    CommonModule,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...EXPORTS_MODULES,
  ],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
    };
  }
}
