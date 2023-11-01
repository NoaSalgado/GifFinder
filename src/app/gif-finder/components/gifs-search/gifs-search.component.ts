import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css'],
})
export class GifsSearchComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  searchTerm($event: Event) {
    $event?.preventDefault();
    console.log(this.searchInput.nativeElement.value);
  }
}
