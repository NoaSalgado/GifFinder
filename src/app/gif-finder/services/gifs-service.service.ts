import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  public gifsList: Gif[] = [];
  private _searchTermsHistory: Array<string> = [];
  private BASE_API_URL: string = 'http://api.giphy.com/v1/gifs';
  private API_KEY: string = 'cRQgdMTUlaSj90UJXA93pdhxFcL4QNZM';

  constructor(private http: HttpClient) {}

  get searchTermsHistory() {
    return [...this._searchTermsHistory];
  }

  searchTerm(term: string) {
    const termToSearch = term.trim().toLocaleLowerCase();
    const isInHistory = this._searchTermsHistory.some(
      (term) => term === termToSearch
    );
    if (termToSearch.length === 0) return;

    if (isInHistory) {
      this._searchTermsHistory = this._searchTermsHistory.filter(
        (term) => term !== termToSearch
      );
    }

    if (this._searchTermsHistory.length === 10 && !isInHistory) {
      this._searchTermsHistory.pop();
    }

    this._searchTermsHistory.unshift(term);

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', termToSearch)
      .set('limit', 20);
    this.http
      .get<SearchResponse>(`${this.BASE_API_URL}/search`, { params })
      .subscribe((resp) => (this.gifsList = resp.data));
  }
}
