import { NgModule } from '@angular/core';
import { SearchService } from './search.service';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule {}
