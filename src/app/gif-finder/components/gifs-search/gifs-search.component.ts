import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';

@Component({
  selector: 'gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css'],
})
export class GifsSearchComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsServiceService) {}

  searchTerm($event: Event) {
    $event?.preventDefault();
    const searchTerm = this.searchInput.nativeElement.value;
    this.gifsService.searchTerm(searchTerm);
    this.searchInput.nativeElement.value = '';
  }
}
