import { NgModule } from '@angular/core';
import { GifFinderHomeComponent } from './pages/gif-finder-home/gif-finder-home.component';
import { GifsSearchComponent } from './components/gifs-search/gifs-search.component';

@NgModule({
  imports: [],
  exports: [GifFinderHomeComponent],
  declarations: [GifFinderHomeComponent, GifsSearchComponent],
})
export class GifFinderModule {}
