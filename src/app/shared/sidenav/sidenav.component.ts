import { Component } from '@angular/core';
import { GifsServiceService } from 'src/app/gif-finder/services/gifs-service.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  constructor(private gifsService: GifsServiceService) {}

  get searchTerms() {
    return this.gifsService.searchTermsHistory;
  }

  searchAgain(term: string) {
    this.gifsService.searchTerm(term);
  }

  deleteTerm(searchTerm: string) {
    this.gifsService.deleteSearchTerm(searchTerm);
  }
}
