import { NgModule } from '@angular/core';
import { GifFinderHomeComponent } from './pages/gif-finder-home/gif-finder-home.component';
import { GifsSearchComponent } from './components/gifs-search/gifs-search.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';
import { CommonModule } from '@angular/common';
import { GifCardComponent } from './components/gif-card/gif-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [GifFinderHomeComponent],
  declarations: [
    GifFinderHomeComponent,
    GifsSearchComponent,
    GifsListComponent,
    GifCardComponent,
  ],
})
export class GifFinderModule {}
