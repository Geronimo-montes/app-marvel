import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeroDetailPageComponent } from './hero-detail-page/hero-detail-page.component';
import { ThemeModule } from '../@theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, FontAwesomeModule],
  declarations: [PagesComponent, HomeComponent, HeroDetailPageComponent],
})
export class PagesModule {}
