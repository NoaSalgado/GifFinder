import { NgModule } from '@angular/core';
import { GifFinderHomeComponent } from './pages/gif-finder-home/gif-finder-home.component';
import { GifsSearchComponent } from './components/gifs-search/gifs-search.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';
import { CommonModule } from '@angular/common';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { AdaptTilePipe } from './pipes/adapt-tile.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [GifFinderHomeComponent],
  declarations: [
    GifFinderHomeComponent,
    GifsSearchComponent,
    GifsListComponent,
    GifCardComponent,
    AdaptTilePipe,
  ],
})
export class GifFinderModule {}
