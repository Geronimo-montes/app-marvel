import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CharacterModel } from './data/character.model';
import { MarvelApiKeyInterceptor } from './http/marvel-api-key.interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CharactersMarvelApiService } from './services/character-marvel-api.service';

const GUARDS: any[] = [];

const DATA_SERVICES: any = [
  { provide: CharacterModel, useClass: CharactersMarvelApiService },
];

const INTERCEPTORES = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MarvelApiKeyInterceptor,
    multi: true,
  },
];

export const NB_CORE_PROVIDERS = [
  ...INTERCEPTORES,
  ...GUARDS,
  ...DATA_SERVICES,
];

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS, ...GUARDS],
    };
  }
}
