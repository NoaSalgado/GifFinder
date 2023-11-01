import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private _searchTermsHistory: Array<string> = [];

  constructor() {}

  get searchTermsHistory() {
    return [...this._searchTermsHistory];
  }

  addSearchTerm(term: string) {
    const termToSave = term.trim().toLocaleLowerCase();
    const isInHistory = this._searchTermsHistory.some(
      (term) => term === termToSave
    );
    if (termToSave.length === 0) return;

    if (isInHistory) {
      this._searchTermsHistory = this._searchTermsHistory.filter(
        (term) => term !== termToSave
      );
    }

    if (this._searchTermsHistory.length === 10 && !isInHistory) {
      this._searchTermsHistory.pop();
    }

    this._searchTermsHistory.unshift(term);
  }
}
