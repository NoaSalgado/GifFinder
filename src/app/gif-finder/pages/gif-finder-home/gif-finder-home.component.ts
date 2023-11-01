import { Component } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'gif-finder-home',
  templateUrl: './gif-finder-home.component.html',
  styleUrls: ['./gif-finder-home.component.css'],
})
export class GifFinderHomeComponent {
  constructor(private gifsService: GifsServiceService) {}

  get gifsList() {
    return this.gifsService.gifsList;
  }
}
